import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from "../libs/utils.js";
import { FaArrowLeft, FaCalendarAlt, FaBook } from 'react-icons/fa';
import journalsData from '../data/journals.json';

const Journals = () => {
  const navigate = useNavigate();
  const [journals] = useState(journalsData);

  const handleFileClick = (year, month, file) => {
    navigate(`/college-work/journals/${year}/${month}/${file.name}`);
  };

  return (
    <section className="w-full min-h-screen bg-white dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0">
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
              className="p-2 bg-white/50 dark:bg-neutral-950 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 rounded-lg transition-colors border border-green-500"
            >
              <FaArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Journals</h1>
              <p className="text-gray-600 dark:text-gray-400">Personal reflections and notes by date</p>
            </div>
          </div>
        </div>

        {/* Journals List */}
        <div className="space-y-6">
          {Object.entries(journals).map(([year, months]) => (
            <div key={year} className="bg-white/50 dark:bg-neutral-950 backdrop-blur-sm rounded-xl border border-gray-200/20 dark:border-gray-700/20 p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                <FaCalendarAlt className="mr-2 text-green-500" />
                {year}
              </h3>
              
              <div className="space-y-4">
                {Object.entries(months).map(([month, files]) => (
                  <div key={month} className="ml-4">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {month}
                    </h4>
                    <div className="grid gap-2 ml-4">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          onClick={() => handleFileClick(year, month, file)}
                          className="flex items-center justify-between p-3 bg-white/30 dark:bg-gray-900/30 rounded-lg hover:bg-white/50 dark:hover:bg-gray-900/50 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center space-x-3">
                            <FaBook className="text-green-500" />
                            <div>
                              <h5 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                {file.title}
                              </h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{file.name}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journals;
