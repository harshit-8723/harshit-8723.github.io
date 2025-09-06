import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cn } from "../libs/utils.js";
import { FaArrowLeft, FaDownload, FaExpand, FaCompress, FaExternalLinkAlt } from 'react-icons/fa';

const AssignmentViewer = () => {
  const { semester, filename } = useParams();
  const navigate = useNavigate();
  
  const [scale, setScale] = useState(1.0);
  
  const fileType = filename.split('.').pop().toLowerCase();
  const filePath = `/assignments/${semester}/${filename}`;

  const zoomIn = () => setScale(Math.min(3.0, scale + 0.2));
  const zoomOut = () => setScale(Math.max(0.5, scale - 0.2));

  // Handle video files
  if (fileType === 'mp4') {
    return (
      <section className="w-full min-h-screen bg-white dark:bg-black">
        {/* Keep the dotted background */}
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
          {/* Back Button - FIXED with theme colors */}
          <div className="mb-6">
            <button
              onClick={() => navigate('/college-work/assignments')}
              className="flex items-center space-x-2 p-3 bg-white dark:bg-neutral-950 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-sm"
            >
              <FaArrowLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Back to Assignments</span>
            </button>
          </div>

          {/* Video Player */}
          <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {filename}
              </h2>
              <a
                href={filePath}
                download={filename}
                className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
              >
                <FaDownload className="w-4 h-4" />
              </a>
            </div>
            
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

  // Handle PDF files with iframe (Simple approach)
  if (fileType === 'pdf') {
    return (
      <section className="w-full min-h-screen bg-white dark:bg-black">
        {/* Keep the dotted background */}
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
          {/* Back Button - FIXED with theme colors */}
          <div className="mb-6">
            <button
              onClick={() => navigate('/college-work/assignments')}
              className="flex items-center space-x-2 p-3 bg-white dark:bg-neutral-950 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-sm"
            >
              <FaArrowLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Back to Assignments</span>
            </button>
          </div>

          {/* Controls */}
          <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700 px-4 py-3 mb-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {filename}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {semester.replace('-', ' ')}
                </p>
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

                {/* Open in New Tab */}
                <a
                  href={filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  title="Open in new tab"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>

                {/* Download Button */}
                <a
                  href={filePath}
                  download={filename}
                  className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
                >
                  <FaDownload className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
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
            >
              <p>Your browser does not support PDFs. 
                <a href={filePath} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  Click here to download the PDF
                </a>
              </p>
            </iframe>
          </div>

          {/* Alternative fallback */}
          <div className="mt-4 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              PDF not displaying properly? 
            </p>
            <div className="space-x-4">
              <a
                href={filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                <FaExternalLinkAlt className="mr-2 w-4 h-4" />
                Open in Browser
              </a>
              <a
                href={filePath}
                download={filename}
                className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                <FaDownload className="mr-2 w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Handle other file types
  return (
    <section className="w-full min-h-screen bg-white dark:bg-black">
      {/* Keep the dotted background */}
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
        {/* Back Button - FIXED with theme colors */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/college-work/assignments')}
            className="flex items-center space-x-2 p-3 bg-white dark:bg-neutral-950 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-sm"
          >
            <FaArrowLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">Back to Assignments</span>
          </button>
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">File: {filename}</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">This file type is not supported for preview.</p>
          <a
            href={filePath}
            download={filename}
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <FaDownload className="mr-2 w-5 h-5" />
            Download File
          </a>
        </div>
      </div>
    </section>
  );
};

export default AssignmentViewer;
