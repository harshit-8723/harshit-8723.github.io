const SimpleButton = ({ title, icon, position, handleClick, otherClasses }) => {
    return (
        <button className={`shadow-[inset_0_0_0_2px_#616467] h-12 w-full  text-black 2 rounded-lg  uppercase bg-transparent  dark:text-neutral-200 transition duration-200 lg:`}
            onClick={handleClick}
        >
            <span className={`inline-flex w-full h-full justify-center cursor-pointer items-center rounded-lg px-7 py-1 text-sm font-medium text-white gap-2  hover:bg-white hover:text-black ${otherClasses}`}>
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    )
}

export default SimpleButton