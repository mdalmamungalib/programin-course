import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

    return (
        <div>
            {/* home header */}
            <section>
                <div className="dark:bg-violet-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Empower Yourself with our Programming Course!',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                '',
                                1000,
                                '',
                                1000,
                                '',
                                1000
                            ]}
                            wrapper="span"
                            speed={25}
                            className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900"
                            style={{ fontSize: 'em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        {/* <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">Empower Yourself with our Programming Course!</h1> */}
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Embark on a transformative journey as a student and master the art of programming. Our comprehensive course equips you with essential coding skills, unleashing your creativity and problem-solving prowess. From building powerful applications to shaping the future of technology, dive into the world of programming and unlock limitless possibilities.</p>
                        <div className="flex flex-wrap justify-center">
                            <Link to="/courses">
                                <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
                            </Link>
                            <Link to="/blog">
                                <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <img src="https://www.techrepublic.com/wp-content/uploads/2022/07/top-ide-software.jpeg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
            {/* home corses part */}
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <Link rel="noopener noreferrer" to="/courses" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <img src="https://miro.medium.com/v2/resize:fit:705/0*bEonUGnx4V0nL1eJ.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">What we will give you!</h3>
                            <p>Embark on an exhilarating journey into the world of coding and unlock a realm of endless possibilities. Our comprehensive coding program offers a transformative learning experience, equipping you with the skills to shape the future. From building innovative applications to solving complex problems, dive into the art of programming and unleash your creativity. Embrace the logic and language of code, and embark on a path that leads to boundless opportunities in the digital age. Whether you're a beginner or an aspiring developer, join us and discover the exhilaration of learning coding while unlocking your full potential.</p>
                        </div>
                    </Link>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Link rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900  sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">CodeCraft: Mastering Web Trio - HTML, CSS, JS</h3>
                                <p>Build the Web: HTML, CSS, and JS Course. Learn to create captivating websites with HTML, style them with CSS, and add interactivity using JavaScript. Unlock your web development skills today.</p>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900  sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://res.cloudinary.com/practicaldev/image/fetch/s--G5AWXQ2H--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/i/v4y43jjfj7u5r8to8qdu.png" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Reactify: Unleash Dynamic Web Experiences with React.js</h3>
                                <p>Master the Art of Web Development with React.js: Harness the Power of Component-Based Architecture, Dynamic User Interfaces, Effortless Data Handling, and Unparalleled Scalability.</p>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900  sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivKJffXIkRkK9_BPqg21dnluqBDilPKK0kw&usqp=CAU" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">PHPower: Unleash the Web with Powerful PHP!</h3>
                                <p>Embark on a Transformational Journey in Web Development with PHP: Harness the Dynamic Potential of Scripting, Embrace Seamless Integration, Explore Vast Libraries, and Shape Limitless Digital Experiences.</p>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900  sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOY8aiSzrUs8XmLizDXEPmEHLXnlIMXBWfQ&usqp=CAU" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">JavaGenius: Unleashing the Power of Java!</h3>
                                <p>Master Java Programming: Unlock the Full Potential of the Java Language. Gain In-Depth Knowledge, Build Scalable Applications, and Forge a Path to Success in the World of Software Development.</p>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900  sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIz2hyRVRjKs6SU9_4OypxIK_XYJkbQbGH5Q&usqp=CAU" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">C++Pro: Powering the Future with C++!</h3>
                                <p>C++ Mastery: Dive into the World of C++ Programming and Unleash Your Potential. From Fundamentals to Advanced Concepts, Learn to Build Efficient and High-Performance Applications with the Versatile C++ Language.</p>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" to="/courses" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900  sm:block">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnCredRrCErFUOp8AbV987m2BDgrS4hz_1K794U7On-cWjftZtAEVuTmpwpYtx9yX27o&usqp=CAU" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Mastering C#: From Fundamentals to Applications!</h3>
                                <p>C# is a powerful language by Microsoft for building applications, leveraging the extensive capabilities of the .NET framework. Proficiency in C# opens diverse software development career opportunities.</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </section>
            {/* suscriber */}
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className="text-5xl font-bold leadi">Stay in the loop</h1>
                        <p className="text-lg">Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!</p>
                    </div>
                    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                        <div className="flex flex-row">
                            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;