import { Spotlight } from "../components/ui/Spotlight.jsx";
import { cn } from "../libs/utils.js";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect.jsx";
import { FaBook, FaFileAlt, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CollegeWork = () => {
  const navigate = useNavigate();

  return (
    <section id="college-work" className="relative">
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-white dark:bg-black">
        
        {/* Spotlights */}
        <div>
          <Spotlight
            className="-top-30 -left-20 md:-left-32 md:-top-20 h-screen"
            fill="orange"
          />
          <Spotlight
            className="-top-30 -left-20 md:left-32 md:top-50 h-screen rotate-110 md:rotate-120"
            fill="white"
          />
          <Spotlight
            className="invisible md:visible md:left-80 md:-top-20 md:h-full"
            fill="green"
          />
        </div>

        {/* Dotted Background */}
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

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <TextGenerateEffect
                className="text-4xl md:text-5xl lg:text-6xl mb-4 font-bold"
                words="College Work"
              />
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                Organized collection of assignments and personal reflections throughout my academic journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Assignments Card */}
              <div 
                onClick={() => navigate('/college-work/assignments')}
                className="group p-8 bg-white/50 dark:bg-neutral-950 backdrop-blur-sm rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:border-orange-300/50 dark:hover:border-orange-500/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg group-hover:bg-orange-200 dark:group-hover:bg-orange-800/40 transition-colors">
                    <FaFileAlt className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      Assignments
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Semester-wise organization of all academic assignments and projects.
                    </p>
                    <div className="flex items-center text-orange-600 dark:text-orange-400 font-medium">
                      <span>View All</span>
                      <FaChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Journals Card */}
              <div 
                onClick={() => navigate('/college-work/journals')}
                className="group p-8 bg-white/50 dark:bg-neutral-950 backdrop-blur-sm rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:border-green-300/50 dark:hover:border-green-500/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800/40 transition-colors">
                    <FaBook className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      Journals
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Personal reflections and daily notes organized by year and month.
                    </p>
                    <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                      <span>View All</span>
                      <FaChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeWork;
