import React from "react";
import { FaBootstrap, FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiFigma, SiGit, SiGithub, SiJavascript, SiNodedotjs, SiRedux, SiTailwindcss } from 'react-icons/si'

const EdSkill = () => {
    return (
        <div name="experience" className="w-full h-screen py-[30%] bg-gradient-to-b from-gray-800 to-black text-white">

            <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full text-white">

                <div className="pb-1">
                    <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500">
                        Experience
                    </p>
                    <p className="p-6">
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0">

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500 ">
                        <li className="m-5 w-20 mx-auto text-orange-600"><FaHtml5 size={80} /></li>
                        <p className="mt-4">
                            HTML
                        </p>
                    </div>

                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500 ">
                        <li className="m-5 w-20 mx-auto text-blue-500"><FaCss3 size={80} /></li>
                        <p className="mt-4">
                            CSS
                        </p>
                    </div>

                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500 ">
                        <li className="m-5 w-20 mx-auto text-yellow-600"><SiJavascript size={80} /></li>
                        <p className="mt-4">
                            JavaScript
                        </p>
                    </div>

                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600 ">
                        <li className="m-5 w-20 mx-auto text-blue-600"><FaReact size={80} /></li>
                        <p className="mt-4">
                            React
                        </p>
                    </div>

                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-500 ">
                        <li className="m-5 w-20 mx-auto text-purple-600"><SiRedux size={80} /></li>
                        <p className="mt-4">
                            Redux
                        </p>
                    </div>

                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500">
                        <li className="m-5 w-20 mx-auto text-green-600"><SiNodedotjs size={80} /></li>
                        <p className="mt-4">
                            Node Js
                        </p>
                    </div>

                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500 ">
                        <li className="m-5 w-20 mx-auto text-gray-600"><SiExpress size={80} /></li>
                        <p className="mt-4">
                            Express Js
                        </p>
                    </div>

                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-500 ">
                        <li className="m-5 w-20 mx-auto text-purple-500"><FaBootstrap size={80} /></li>
                        <p className="mt-4">
                            BootStrap
                        </p>
                    </div>

                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500 ">
                        <li className="m-5 w-20 mx-auto text-blue-500"><SiTailwindcss size={80} /></li>
                        <p className="mt-4">
                            Tailwind
                        </p>
                    </div>

                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500 ">
                        <li className="m-5 w-20 mx-auto text-orange-500"><SiGit size={80} /></li>
                        <p className="mt-4">
                            Git
                        </p>
                    </div>

                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500 ">
                        <li className="m-5 w-20 mx-auto text-gray-500"><SiGithub size={80} /></li>
                        <p className="mt-4">
                            GitHub
                        </p>
                    </div>

                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-pink-500 ">
                        <li className="m-5 w-20 mx-auto text-pink-500"><SiFigma size={80} /></li>
                        <p className="mt-4">
                            Figma
                        </p>
                    </div>

                


                </div>

            </div>

        </div>
    );
};

export default EdSkill;
