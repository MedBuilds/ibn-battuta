function Header(){
    return (
        <header className="flex justify-between items-center gap-5 p-3 m-3 rounded-2xl">
            {/* Logo */}
            <div className="flex gap-2 items-center">
                <div className="bg-primary p-1 rounded-[5px]" title="Ibn Battuta">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane preview-icon size-5 text-white"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                </div>
                <p className="text-sm font-medium">IbnBattuta</p>
            </div>

            {/* Nav */}
            <nav>
                <ul className="hidden sm:flex justify-center items-center text-sm sm:text-xs sm:gap-3 md:text-sm md:gap-6">
                    <li className="hover:text-primary transition duration-200 hover:scale-105"><a href="#">Book Flights</a></li>
                    <li className="hover:text-primary transition duration-200 hover:scale-105"><a href="#">Manage Trip</a></li>
                    <li className="hover:text-primary transition duration-200 hover:scale-105"><a href="#">Flight Status</a></li>
                    <li className="hover:text-primary transition duration-200 hover:scale-105"><a href="#">Check-in</a></li>
                </ul>
            </nav>

            {/* Sign in & Menu Buttons */}
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe preview-icon size-4 text-gray-400 hidden sm:block"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span className="hidden sm:block text-gray-500 font-light text-xs">EN/USD</span>
                <button className="sm:hidden text-primary cursor-pointer hover:scale-98 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu preview-icon size-5"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
                </button>
                <button className="bg-primary px-2 py-1 rounded-[10px] text-white font-semibold text-sm cursor-pointer hover:scale-98 transition duration-300">Sign in</button>
            </div>
        </header>
    )
}

export default Header