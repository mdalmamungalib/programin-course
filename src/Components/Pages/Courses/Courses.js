import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaAnglesRight } from "react-icons/fa6";

const Courses = () => {

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                <div className="justify-center grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 sm:block">
                        <div data-aos="zoom-in-up">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">CodeCraft: Mastering Web Trio - HTML, CSS, JS</h3>
                                <p>
                                Build the Web: HTML, CSS, and JS Course. Learn to create captivating websites with HTML, style them with CSS, and add interactivity using JavaScript. Unlock your web development skills today.
                                </p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-500 dark:text-gray-800">120$</button>
                            </div>
                            <div className='flex justify-center items-center mt-8 mb-4'>
                                <Link to="/">
                                    <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800 hover:dark:bg-gray-500">Enroll Now <FaAnglesRight className='ml-2'></FaAnglesRight></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 sm:block">
                        <div data-aos="zoom-in-up">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://res.cloudinary.com/practicaldev/image/fetch/s--G5AWXQ2H--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/i/v4y43jjfj7u5r8to8qdu.png" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Reactify: Unleash Dynamic Web Experiences with React.js</h3>
                                <p>
                                Master the Art of Web Development with React.js: Harness the Power of Component-Based Architecture, Dynamic User Interfaces, Effortless Data Handling, and Unparalleled Scalability.
                                </p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-500 dark:text-gray-800">180$</button>
                            </div>
                            <div className='flex justify-center items-center mt-8 mb-4'>
                                <Link to="/">
                                    <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800 hover:dark:bg-gray-500">Enroll Now <FaAnglesRight className='ml-2'></FaAnglesRight></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 sm:block">
                        <div data-aos="zoom-in-up">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivKJffXIkRkK9_BPqg21dnluqBDilPKK0kw&usqp=CAU" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">PHPower: Unleash the Web with Powerful PHP!</h3>
                                <p>
                                Embark on a Transformational Journey in Web Development with PHP: Harness the Dynamic Potential of Scripting, Embrace Seamless Integration, Explore Vast Libraries, and Shape Limitless Digital Experiences.
                                </p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-500 dark:text-gray-800">150$</button>
                            </div>
                            <div className='flex justify-center items-center mt-8 mb-4'>
                                <Link to="/">
                                    <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800 hover:dark:bg-gray-500">Enroll Now <FaAnglesRight className='ml-2'></FaAnglesRight></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 sm:block">
                        <div data-aos="zoom-in-up">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOY8aiSzrUs8XmLizDXEPmEHLXnlIMXBWfQ&usqp=CAU" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">JavaGenius: Unleashing the Power of Java!</h3>
                                <p>
                                Master Java Programming: Unlock the Full Potential of the Java Language. Gain In-Depth Knowledge, Build Scalable Applications, and Forge a Path to Success in the World of Software Development.
                                </p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-500 dark:text-gray-800">185$</button>
                            </div>
                            <div className='flex justify-center items-center mt-8 mb-4'>
                                <Link to="/">
                                    <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800 hover:dark:bg-gray-500">Enroll Now <FaAnglesRight className='ml-2'></FaAnglesRight></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 sm:block">
                        <div data-aos="zoom-in-up">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIz2hyRVRjKs6SU9_4OypxIK_XYJkbQbGH5Q&usqp=CAU" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">C++Pro: Powering the Future with C++!</h3>
                                <p>
                                C++ Mastery: Dive into the World of C++ Programming and Unleash Your Potential. From Fundamentals to Advanced Concepts, Learn to Build Efficient and High-Performance Applications with the Versatile C++ Language.
                                </p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-500 dark:text-gray-800">695$</button>
                            </div>
                            <div className='flex justify-center items-center mt-8 mb-4'>
                                <Link to="/">
                                    <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800 hover:dark:bg-gray-500">Enroll Now <FaAnglesRight className='ml-2'></FaAnglesRight></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 sm:block">
                        <div data-aos="zoom-in-up">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnCredRrCErFUOp8AbV987m2BDgrS4hz_1K794U7On-cWjftZtAEVuTmpwpYtx9yX27o&usqp=CAU" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Mastering C#: From Fundamentals to Applications!</h3>
                                <p>
                                C# is a powerful language by Microsoft for building applications, leveraging the extensive capabilities of the .NET framework. Proficiency in C# opens diverse software development career opportunities.
                                </p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-500 dark:text-gray-800">120$</button>
                            </div>
                            <div className='flex justify-center items-center mt-8 mb-4'>
                                <Link to="/">
                                    <button type="button" className="px-8 py-3 flex items-center font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800 hover:dark:bg-gray-500">Enroll Now <FaAnglesRight className='ml-2'></FaAnglesRight></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;