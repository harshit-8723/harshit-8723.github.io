import { Spotlight } from "./ui/Spotlight.jsx";
import { cn } from "../libs/utils.js";
import { TextGenerateEffect } from "./ui/TextGenerateEffect.jsx";
import MagicButton from "./ui/MagicButton.jsx";
import { FaLocationArrow, FaArrowDown } from "react-icons/fa";
import SimpleButton from "./ui/SimpleButton.jsx";

const Hero = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-white dark:bg-black">

            {/* Spotlights */}
            <div>
                <Spotlight
                    className="-top-30 -left-20 md:-left-32 md:-top-20 h-screen "
                    fill="orange"
                />
                <Spotlight
                    className="-top-30 -left-20 md:left-32 md:top-50 h-screen rotate-110 md:rotate-120"
                    fill="white"
                />
                <Spotlight
                    className="invisible md:visible  md:left-80 md:-top-20 md:h-full "
                    fill="green"
                />
            </div>

            {/* Dotted Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:20px_20px]",
                        "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                        "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                    )}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-white dark:bg-black" />
            </div>

            {/* Main Hero Content */}
            <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 py-20">

                {/* Text Content */}
                <div className="w-full md:w-1/2 p-2.5 text-center md:text-left">
    
                    <TextGenerateEffect
                        className="text-[40px] md:text-5xl lg:text-6xl mb-4"
                        words="Bringing Ideas To Real Life"
                    />

                    <p className="text-2xl md:text-3xl text-white mb-6">
                        Hi I&apos;m Harshit 
                    </p>

                    {/* todo: add functionality to the buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <a href="#about">
                            <SimpleButton
                                title="See My Work"
                                position="right"
                                icon={<FaArrowDown />}
                            />
                        </a>
                        <a href="#about">
                            <MagicButton
                                title="Download Resume"
                                position="right"
                                icon={<FaLocationArrow />}
                            />
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center p-2.5">
                    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
                        <img
                            src="./images/harshit-image.jpg"
                            alt="User Image"
                            className="aspect-[1/1] h-auto w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;


