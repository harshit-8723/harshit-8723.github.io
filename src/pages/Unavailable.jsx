import { CgUnavailable } from "react-icons/cg";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { cn } from "../libs/utils.js";

const Unavailable = () => {
    return (
        <section className="w-full min-h-screen bg-white dark:bg-black">
            {/* Background - ADD pointer-events-none to fix clicking */}
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

            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div className="text-center space-y-8 max-w-2xl mx-auto">
                    
                    {/* Main Content */}
                    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/20 dark:border-gray-700/20 p-8 shadow-lg">
                        
                        {/* Icon and Title */}
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <CgUnavailable className="w-12 h-12 text-blue-500" />
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
                                Live Site Not Available
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            This project is currently under development or the live deployment is temporarily unavailable. 
                            Check back soon or explore my other projects!
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            
                            {/* Go Home Button */}
                            <a 
                                href="/" 
                                className="flex items-center gap-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-medium"
                            >
                                <FaHome className="w-4 h-4" />
                                Go Home
                            </a>

                            {/* Back Button */}
                            <button 
                                onClick={() => window.history.back()}
                                className="flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-700/70 text-gray-800 dark:text-gray-200 rounded-lg border border-gray-200/20 dark:border-gray-700/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm font-medium"
                            >
                                <FaArrowLeft className="w-4 h-4" />
                                Go Back
                            </button>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 pt-6 border-t border-gray-200/20 dark:border-gray-700/20">
                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                If you're experiencing issues, feel free to reach out through the contact section.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Unavailable;
