import React from 'react';

const About = () => {
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1380&t=st=1687830558~exp=1687831158~hmac=c8207c34ba6097deeae8b080e83a8330b2d64505f55ebd49ead224a46f7353e8" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">CodeCraft: Unleashing the Programmer Within</a>
                        <p className="text-xs dark:text-gray-400">By
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
                        </p>
                    </div>
                    <div className="dark:text-gray-100">
                        <p>Welcome to our comprehensive programming course, a transformative journey that will equip you with the skills and knowledge needed to excel in the world of coding.<br></br><br></br>

                            In this course, we have carefully crafted a curriculum that covers a wide range of programming concepts and techniques, empowering you to become a proficient and confident coder. Whether you are a beginner taking your first steps into the programming world or an experienced developer looking to expand your skill set, this course is designed to meet your needs.<br></br>
                            <br></br>

                            Throughout the program, you will dive deep into programming fundamentals, learn industry best practices, and explore the latest trends and technologies. Our interactive learning modules will guide you through hands-on exercises, real-world projects, and coding challenges, ensuring that you gain practical experience and problem-solving skills along the way.<br></br><br></br>

                            But it doesn't stop there. We believe that learning is a collaborative and supportive experience. As part of our program, you will join a vibrant community of fellow learners, where you can engage in discussions, share insights, and collaborate on projects. Our team of experienced instructors and mentors will be there to provide guidance, answer your questions, and support you throughout your learning journey.<br></br><br></br>

                            By the end of this course, you will emerge as a skilled programmer, equipped with the tools and confidence to tackle any coding task. Whether you aspire to build web applications, develop mobile apps, or dive into data science, this course will provide you with a strong foundation to pursue your programming goals.<br></br><br></br>

                            Join us on this exciting adventure as we unravel the art and science of coding. Let's unlock your potential and embark on a journey of endless possibilities. Get ready to write your own success story with our programming course!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;