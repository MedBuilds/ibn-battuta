function Nav({menuState}){
    return (
        <nav>
            <ul className={`${menuState ? "flex flex-col gap-3" : "hidden" } sm:flex justify-center items-center text-sm sm:text-xs sm:gap-3 md:text-sm md:gap-6`}>
                <li className="w-full px-3 py-1 hover:bg-primary/10 rounded-lg sm:w-fit sm:p-0 sm:hover:bg-primary/0 hover:text-primary transition duration-200 hover:scale-105"><a href="#">Book Flights</a></li>
                <li className="w-full px-3 py-1 hover:bg-primary/10 rounded-lg sm:w-fit sm:p-0 sm:hover:bg-primary/0 hover:text-primary transition duration-200 hover:scale-105"><a href="#">Manage Trip</a></li>
                <li className="w-full px-3 py-1 hover:bg-primary/10 rounded-lg sm:w-fit sm:p-0 sm:hover:bg-primary/0 hover:text-primary transition duration-200 hover:scale-105"><a href="#">Flight Status</a></li>
                <li className="w-full px-3 py-1 hover:bg-primary/10 rounded-lg sm:w-fit sm:p-0 sm:hover:bg-primary/0 hover:text-primary transition duration-200 hover:scale-105"><a href="#">Check-in</a></li>
            </ul>
        </nav>
    )
}

export default Nav;