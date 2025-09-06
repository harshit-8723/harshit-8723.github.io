import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { cn } from "../libs/utils.js";
import { FaArrowLeft, FaDownload, FaPlay, FaFileAlt, FaFilePdf, FaBook, FaExpand, FaCompress, FaExternalLinkAlt } from 'react-icons/fa';

const JournalViewer = () => {
  const { year, month, filename } = useParams();
  const navigate = useNavigate();
  
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1.0);

  const fileType = filename.split('.').pop().toLowerCase();
  const filePath = `/journal/${year}/${month}/${filename}`;

  useEffect(() => {
    if (fileType === 'md') {
      loadMarkdown();
    } else {
      setLoading(false);
    }
  }, [year, month, filename]);

  const loadMarkdown = async () => {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error('Failed to fetch markdown file');
      }
      const text = await response.text();
      setContent(text);
    } catch (error) {
      console.error('Error loading markdown:', error);
      setError('Failed to load journal entry');
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = () => {
    if (fileType === 'md') {
      const element = document.createElement('a');
      const file = new Blob([content], { type: 'text/markdown' });
      element.href = URL.createObjectURL(file);
      element.download = filename;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } else {
      const element = document.createElement('a');
      element.href = filePath;
      element.download = filename;
      element.click();
    }
  };

  const getFileIcon = () => {
    switch (fileType) {
      case 'pdf':
        return <FaFilePdf className="text-red-400" />;
      case 'mp4':
        return <FaPlay className="text-blue-400" />;
      case 'md':
        return <FaBook className="text-green-400" />;
      default:
        return <FaFileAlt className="text-gray-400" />;
    }
  };

  const zoomIn = () => setScale(Math.min(3.0, scale + 0.2));
  const zoomOut = () => setScale(Math.max(0.5, scale - 0.2));

  // Handle MP4 files
  if (fileType === 'mp4') {
    return (
      <section className="w-full min-h-screen bg-white dark:bg-black">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={cn(
              "fixed inset-0",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
            )}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          {/* Back Button - FIXED */}
          <div className="mb-6">
            <button
              onClick={() => navigate('/college-work/journals')}
              className="flex items-center space-x-2 p-3 bg-white dark:bg-neutral-950 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-sm"
            >
              <FaArrowLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Back to Journals</span>
            </button>
          </div>

          {/* Video Header */}
          <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getFileIcon()}
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ')}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    {month} {year} • Video
                  </p>
                </div>
              </div>
              <button
                onClick={downloadFile}
                className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                <FaDownload className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Video Player */}
          <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg">
            <div className="flex justify-center">
              <video 
                controls 
                className="max-w-full h-auto rounded-lg shadow-lg"
                style={{ maxHeight: '70vh' }}
              >
                <source src={filePath} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Handle PDF files
  if (fileType === 'pdf') {
    return (
      <section className="w-full min-h-screen bg-white dark:bg-black">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={cn(
              "fixed inset-0",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
            )}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={() => navigate('/college-work/journals')}
              className="flex items-center space-x-2 p-3 bg-white dark:bg-neutral-950 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-sm"
            >
              <FaArrowLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Back to Journals</span>
            </button>
          </div>

          {/* PDF Controls */}
          <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getFileIcon()}
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    {filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ')}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {month} {year} • PDF Document
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Zoom Controls */}
                <div className="flex items-center space-x-2">
                  <button onClick={zoomOut} className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <FaCompress className="w-4 h-4" />
                  </button>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{Math.round(scale * 100)}%</span>
                  <button onClick={zoomIn} className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <FaExpand className="w-4 h-4" />
                  </button>
                </div>

                <a
                  href={filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>

                <button
                  onClick={downloadFile}
                  className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  <FaDownload className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={filePath}
              style={{ 
                width: '100%', 
                height: '80vh',
                transform: `scale(${scale})`,
                transformOrigin: '0 0'
              }}
              title={filename}
              className="border-0"
            />
          </div>
        </div>
      </section>
    );
  }

  // Handle Markdown files
  return (
    <section className="w-full min-h-screen bg-white dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={cn(
            "fixed inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/college-work/journals')}
            className="flex items-center space-x-2 p-3 bg-white dark:bg-neutral-950 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-sm"
          >
            <FaArrowLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">Back to Journals</span>
          </button>
        </div>

        {loading && (
          <div className="flex items-center justify-center h-96">
            <div className="text-gray-600 dark:text-gray-400">Loading journal...</div>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-red-500 mb-4">{error}</div>
              <button
                onClick={() => navigate('/college-work/journals')}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Back to Journals
              </button>
            </div>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Header */}
            <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getFileIcon()}
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {filename.replace('.md', '').replace(/[-_]/g, ' ')}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      {month} {year} • Markdown
                    </p>
                  </div>
                </div>
                <button
                  onClick={downloadFile}
                  className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  <FaDownload className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Markdown Content - FIXED */}
            <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-lg">
              <div className="prose prose-lg max-w-none prose-gray dark:prose-invert text-white">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default JournalViewer;
