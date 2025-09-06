import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from "../libs/utils.js";
import { FaArrowLeft, FaCalendarAlt, FaFileAlt, FaFilePdf, FaPlay } from 'react-icons/fa';
import assignmentsData from '../data/assignments.json';

const Assignments = () => {
  const navigate = useNavigate();
  const [assignments] = useState(assignmentsData);

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'pdf':
        return <FaFilePdf className="text-red-500" />;
      case 'mp4':
        return <FaPlay className="text-blue-500" />;
      default:
        return <FaFileAlt className="text-gray-500" />;
    }
  };

  const handleFileClick = (semester, file) => {
    navigate(`/college-work/assignments/${semester}/${file.name}`);
  };

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

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/college-work')}
              className="p-2 bg-white/50 dark:bg-neutral-950 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 rounded-lg transition-colors border border-orange-500"
            >
              <FaArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Assignments</h1>
              <p className="text-gray-600 dark:text-gray-400">Academic assignments organized by semester</p>
            </div>
          </div>
        </div>

        {/* Assignments List */}
        <div className="space-y-6">
          {Object.entries(assignments).map(([semester, files]) => (
            <div key={semester} className="bg-white/50 dark:bg-neutral-950 backdrop-blur-sm rounded-xl border border-gray-200/20 dark:border-gray-700/20 p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                <FaCalendarAlt className="mr-2 text-orange-500" />
                {semester.replace('-', ' ')}
              </h3>
              
              <div className="grid gap-3">
                {files.map((file, index) => (
                  <div
                    key={index}
                    onClick={() => handleFileClick(semester, file)}
                    className="flex items-center justify-between p-4 bg-white/30 dark:bg-gray-900/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-900/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      {getFileIcon(file.type)}
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {file.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{file.subject} • {file.name}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {file.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assignments;
