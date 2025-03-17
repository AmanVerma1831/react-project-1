import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { LOGO_IMG } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    const { user } = useContext(UserContext);

    return (
        <header className="bg-orange-400 text-white shadow-lg hidden md:flex md:justify-center">
            <div className="container flex items-center h-24 max-w-screen-xl">
                <Link to="/" className="flex items-center justify-center">
                    <img className="w-20 rounded-full" src={LOGO_IMG} alt="Food Villa Logo" />
                    <span className="ml-4 uppercase font-black">The Food Villa</span>
                </Link>
                <div className="contents font-semibold text-base lg:text-lg">
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
                            <Link to="/" className="">Pricing</Link>
                        </li>
                        <li className="p-5 xl:p-8 hover:text-pink-600">
                            <Link to="/contact" className="">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
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

                    <Link to="/auth" className="nav-button">
                        <button className="border border-white rounded-full font-bold px-8 py-2 hover:text-pink-600 hover:border-pink-600"
                            onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? user.name : "Login"}</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;


