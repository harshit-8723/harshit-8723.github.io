import { CgUnavailable } from "react-icons/cg";
import {FaArrowLeft } from "react-icons/fa";

const Unavailable = () => {
    return (
        <div className="min-h-screen flex items-center justify-center gap-2 flex-col bg-white dark:bg-black text-black dark:text-white">
            <h1 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="flex gap-2 items-center"><CgUnavailable /> Live Site Not Available</span>
            </h1>
            <span className="flex gap-2 items-center text-green-300 border border-white px-2 rounded-xl">
                <FaArrowLeft />  <a href="/" className="text-2xl" >Go Home </a>
            </span>
        </div>
    );
};

export default Unavailable;
