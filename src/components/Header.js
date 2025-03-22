import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { LOGO_IMG } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Header = () => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [logList, setLogList] = useState(false);
    const isOnline = useOnline();
    const { user } = useContext(UserContext);

    return (
        <header className="bg-orange-400 text-white shadow-lg flex justify-center">
            <div className="container md:flex items-center h-24 max-w-screen-xl">
                <Link to="/" className="flex items-center justify-center">
                    <img className="w-20 rounded-full" src={LOGO_IMG} alt="Food Villa Logo" />
                    <span className="ml-4 uppercase font-black">The Food Villa</span>
                </Link>
                <div className="hidden md:contents font-semibold text-base lg:text-lg">
                    <ul className="mx-auto flex items-center">
                        <li className="p-5 xl:p-8 active hover:text-pink-600">
                            <Link to="/" className="" aria-current="page">Home</Link>
                        </li>
                        <li className="p-5 xl:p-8 hover:text-pink-600">
                            <Link to="/about" className="">About</Link>
                        </li>
                        <li className="p-5 xl:p-8 hover:text-pink-600">
                            <Link to="/instamart" className="">Instamart</Link>
                        </li>
                        <li className="p-5 xl:p-8 hover:text-pink-600">
                            <Link to="/contact" className="">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex items-center">
                    <div className="px-4" title="connected">
                        {!isOnline ?
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-8 w-8 text-red-600 font-bold">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                            :
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-8 w-8 font-bold">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                            </svg>}
                    </div>

                    {/* <Link to="/auth" className="nav-button">
                        <button className="border border-white rounded-full font-bold px-8 py-2 hover:text-pink-600 hover:border-pink-600"
                            onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? user.name : "Login"}</button>
                    </Link> */}
                    <div className="relative">
                        <button className="flex items-center cursor-pointer" aria-expanded="false" onClick={() => setLogList(!logList)}>
                            <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" className="rounded-full h-8 w-8" alt="user-img" />
                        </button>
                        {logList &&
                            <div class="absolute z-50 my-2 text-base list-none bg-white rounded-lg shadow-2xl" id="user-dropdown">
                                <div class="px-4 py-3">
                                    <span class="block text-sm text-gray-900">Bonnie Green</span>
                                    <span class="block text-sm  text-gray-500 truncate">name@flowbite.com</span>
                                </div>
                                <ul class="py-2">
                                    <li>
                                        <Link to="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link to="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Settings</Link>
                                    </li>
                                    <li>
                                        <Link to="/auth" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Sign In</Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="p-2 relative"> {/* Add relative positioning to parent */}
                            {/* Notification badge */}
                            <div className="absolute top-1/3 left-3/5 -translate-x-1/2 -translate-y-1/2">
                                <p className="text-xs text-white font-medium bg-red-500 rounded-full h-4 w-4 flex items-center justify-center">3</p>
                            </div>

                            {/* Shopping Cart Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-8 w-8">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;


