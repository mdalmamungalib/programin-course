import React, { useContext } from "react";
import "./Dropdown.css"
import img from '../../Images/navBar.png'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa6";
import { toast } from "react-hot-toast";

const NavBar = () => {
    const navigate = useNavigate();
    const { user, handleUserLogOut } = useContext(AuthContext);

    const handleUserSingOut = () => {
        handleUserLogOut()
            .then(() => {
                navigate("/login")
                toast.error("user log out")
            })
    }
    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <Link
                    rel="noopener noreferrer"
                    to="/"
                    aria-label="Back to homepage"
                    className="flex items-center p-2"
                >
                    <img className="h-16" src={img} alt="" />

                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link
                            rel="noopener noreferrer"
                            to="/"
                            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="flex">
                        <Link
                            rel="noopener noreferrer"
                            to="/courses"
                            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400"
                        >
                            Courses
                        </Link>
                    </li>
                    <li className="flex">
                        <Link
                            rel="noopener noreferrer"
                            to="/blog"
                            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400"
                        >
                            Blog
                        </Link>
                    </li>
                    <li className="flex">
                        <Link
                            rel="noopener noreferrer"
                            to="/about"
                            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400"
                        >
                            About
                        </Link>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <Link to="/profile">
                        {
                            user?.photoURL ?
                                <img style={{ height: '40px' }} className="rounded-full" src={user?.photoURL} />
                                :
                                <FaUser></FaUser>
                        }
                    </Link>
                    {
                        user?.uid ?
                            <Link to="/login">
                                <button onClick={handleUserSingOut} className="self-center px-8 py-3 hover:dark:text-gray-500 rounded">Sign Out</button>
                            </Link>
                            :
                            <>
                                <Link to="/login">
                                    <button className="self-center px-8 py-3 hover:dark:text-gray-500 rounded">Sign in</button>
                                </Link>
                                <Link to="/singUp">
                                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 hover:dark:bg-violet-700 dark:text-gray-900">
                                        Sign up
                                    </button>
                                </Link>
                            </>
                    }
                </div>
                {/* large device hedden */}
                <button className="p-4 lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 dark:text-gray-100"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>

                    </svg>
                    <div class="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label class="menu__btn" for="menu__toggle">
                            <span></span>
                        </label>


                        <ul class="menu__box" >
                            <li className="flex text-4xl mt-3">
                                <Link
                                    rel="noopener noreferrer"
                                    to="/"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="flex text-4xl mt-3">
                                <Link
                                    rel="noopener noreferrer"
                                    to="/courses"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li className="flex text-4xl mt-3">
                                <Link
                                    rel="noopener noreferrer"
                                    to="/blog"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="flex text-4xl mt-3">
                                <Link
                                    rel="noopener noreferrer"
                                    to="/about"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400"
                                >
                                    About
                                </Link>
                            </li>
                            <div className="self-center justify-center mt-3 px-8 py-3v">
                                <Link to="/profile">
                                    {
                                        user?.photoURL ?
                                            <img style={{ height: '40px' }} className="rounded-full" src={user?.photoURL} />
                                            :
                                            <FaUser></FaUser>
                                    }
                                </Link>
                            </div>

                            {
                                user?.uid ?
                                    <Link to="/login">
                                        <button onClick={handleUserSingOut} className="self-center px-8 py-3 hover:dark:text-gray-500 rounded">Sign Out</button>
                                    </Link>
                                    :
                                    <>
                                        <Link to="/login">
                                            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 hover:dark:bg-violet-700 dark:text-gray-900">Sign in</button>
                                        </Link>
                                        <Link to="/singUp">
                                            <button className="self-center ml-3 mt-3 px-8 py-3 font-semibold rounded dark:bg-violet-400 hover:dark:bg-violet-700 dark:text-gray-900">
                                                Sign up
                                            </button>
                                        </Link>
                                    </>
                            }

                        </ul>
                    </div>
                </button>



                {/* <label for="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                    <span>Day</span>
                    <span className="relative">
                        <input id="Toggle2" type="checkbox" className="hidden peer" />
                        <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-violet-400"></div>
                        <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400"></div>
                    </span>
                    <span>Night</span>
                </label> */}
            </div>
        </header>
    );
};

export default NavBar;
