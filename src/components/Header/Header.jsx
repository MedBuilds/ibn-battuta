import { useState } from "react";
import Nav from "./Nav";

function Header() {
    const [menuState, setMenuState] = useState(false);

    function menuToggle() {
        setMenuState(!menuState);
    }

    return (
        <>
            <header className="flex justify-between items-center gap-5 p-3 m-3 rounded-2xl bg-white relative z-5">
                {/* Logo */}
                <div className="flex gap-2 items-center">
                    <div
                        className="bg-primary p-1 rounded-[5px]"
                        title="Ibn Battuta"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-plane preview-icon size-5 text-white"
                        >
                            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                        </svg>
                    </div>
                    <p className="text-sm font-medium">IbnBattuta</p>
                </div>

                {/* Nav */}
                <Nav menuState={false} />

                {/* Sign in & Menu Buttons */}
                <div className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe preview-icon size-4 text-gray-400 hidden sm:block"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                    </svg>
                    <span className="hidden sm:block text-gray-500 font-light text-xs">
                        EN/USD
                    </span>
                    <button className="bg-primary px-2 py-1 rounded-[10px] text-white font-semibold text-sm cursor-pointer hover:scale-98 transition duration-300">
                        Sign in
                    </button>
                    <button
                        onClick={menuToggle}
                        className="sm:hidden text-primary cursor-pointer hover:scale-98 transition duration-300"
                    >
                        {menuState ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-menu preview-icon size-5"
                            >
                                <path d="M4 5h16" />
                                <path d="M4 12h16" />
                                <path d="M4 19h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Menu */}
                {menuState && (
                    <div className="sm:hidden bg-white p-3 rounded-lg absolute top-[110%] right-0 w-fit h-fit z-8">
                        <Nav menuState={menuState} />
                        <hr className="mx-2 my-3 text-primary/30" />
                        <p className="px-2 text-gray-500 font-light text-xs">
                            • EN/USD
                        </p>
                    </div>
                )}
            </header>
            {/* Menu */}
            {menuState && (
                <div
                    onClick={menuToggle}
                    className="sm:hidden h-screen w-screen bg-primary/50 inset-0 absolute z-1 backdrop-blur-xs"
                ></div>
            )}
        </>
    );
}

export default Header;
