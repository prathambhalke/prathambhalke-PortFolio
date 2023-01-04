import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
    // let social = [
    //     {
    //         id: 1,
    //         child: (
    //             <>
    //                 Linkedin <FaLinkedin />
    //             </>
    //         ),
    //         href: "https://www.linkedin.com/in/prathamesh-bhalke-174b90226"
    //     },
    //     {
    //         id: 2,
    //         child: (
    //             <>
    //                 Github <FaGithub />
    //             </>
    //         ),
    //         href: "https://github.com/prathambhalke"
    //     },
    //     {
    //         id: 3,
    //         child: (
    //             <>
    //                 Mail <AiOutlineMail />
    //             </>
    //         ),
    //         href: "mailto:bhalkeprathamesh11@gmail.com"
    //     },
    //     {
    //         id: 4,
    //         child: (
    //             <>
    //                 Twitter <FaTwitter />
    //             </>
    //         ),
    //         href: "https://twitter.com/prathambhalke"
    //     }
    // ]
    return (
        <div>
            <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
                <ul >
                    <li className="flex justify-end items-center w-32 h-1/3 py-3 px-2 ml-[-65%] hover:rounded-md hover:ml-[-3%] duration-500 bg-blue-600 cursor-pointer"><a className='flex text-white font-bold' href="https://www.linkedin.com/in/prathamesh-bhalke-174b90226" target="_blank" >Linkedin<FaLinkedin size={30} className="ml-2 text-white" /></a></li>

                    <li className="flex justify-end items-center w-32 h-1/3 py-3 px-2 ml-[-65%] hover:rounded-md hover:ml-[-3%] duration-500 bg-gray-600 cursor-pointer"><a className='flex text-white font-bold' href="https://github.com/prathambhalke" target="_blank">Github<FaGithub size={30} className="ml-2 text-white" /></a></li>

                    <li className="flex justify-end items-center w-32 h-1/3 py-3 px-2 ml-[-65%] hover:rounded-md hover:ml-[-3%] duration-500 bg-red-600 cursor-pointer "><a className='flex text-white font-bold' href="mailto:bhalkeprathamesh11@gmail.com" target="_blank">Mail<AiOutlineMail size={30} className="ml-2 text-white" /></a></li>

                    <li className="flex justify-end items-center w-32 h-1/3 py-3 px-2 ml-[-65%] hover:rounded-md hover:ml-[-3%] duration-500 bg-blue-500 cursor-pointer "><a className='flex text-white font-bold' href="https://twitter.com/prathambhalke" target="_blank">Twitter<FaTwitter size={30} className="ml-2 text-white" /></a></li>

                    <li className="flex justify-end items-center w-32 h-1/3 py-3 px-2 ml-[-65%] hover:rounded-md hover:ml-[-3%] duration-500 bg-green-500 cursor-pointer "><a className='flex text-white font-bold' href="/Resume_Prathamesh_Bhalke_Frontend_Web_Developer.pdf" download="true" target="_blank" >Resume<BsPersonLinesFill size={30} className="ml-2 text-white" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default SocialLinks
