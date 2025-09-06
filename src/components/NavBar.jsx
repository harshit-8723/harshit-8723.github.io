const NavBar = ({ navItems }) => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full z-50 bg-white dark:bg-black shadow-md opacity-90 rounded-full border border-neutral-200 max-w-fit">
      {/* rest of your code stays the same */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-13">
          <div className="flex space-x-4">
            {navItems.map((navItem, idx) => (
              <a
                key={`nav-${idx}`}
                href={navItem.link}
                className="flex items-center space-x-1 text-sm text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300"
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </a>
            ))}
          </div>

          <a href="/#contact">
            <button className="px-2 py-2 text-sm w-25 h-10 font-medium text-black dark:text-white border border-neutral-200 dark:border-white/[0.2] rounded-full relative ml-4 hover:cursor-pointer">
              <span>Contact Me</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
