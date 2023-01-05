import React from 'react'
import PortFolio from "../assets/PortFoilo.png"
import ViteKart from "../assets/ViteKart.png"
import Spotify from "../assets/Spotify.png"
import SnakeGame from "../assets/SnakeGame.png"
import WhetherApp from "../assets/WhetherApp.png"
import ShadowGen from "../assets/ShadowGen.png"

const Projects = () => {

    const projects = [
        {
            id: 1,
            image: PortFolio,
            demoLink: "#",
            codeLink: "https://github.com/prathambhalke/prathambhalke-PortFolio",
        },
        {
            id: 1,
            image: ViteKart,
            demoLink: "#",
            codeLink: "https://github.com/prathambhalke/Vite-Kart",
        },
        {
            id: 1,
            image: Spotify,
            demoLink: "https://prathams-spotify.netlify.app",
            codeLink: "https://github.com/prathambhalke/Spotify-Clone",
        },
        {
            id: 1,
            image: SnakeGame,
            demoLink: "https://glowing-profiterole-a5e3e6.netlify.app",
            codeLink: "https://github.com/prathambhalke/Snake_game",
        },
        {
            id: 1,
            image: WhetherApp,
            demoLink: "https://codesandbox.io/s/github/prathambhalke/Whether-App-React",
            codeLink: "https://github.com/prathambhalke/Whether-App-React",
        },
        {
            id: 1,
            image: ShadowGen,
            demoLink: "https://codesandbox.io/s/github/prathambhalke/Box-Shadow-Generator",
            codeLink: "https://github.com/prathambhalke/Box-Shadow-Generator",
        },


    ]

    return (
        <div name="Projects" className='bg-gradient-to-b from-black to-gray-800 pt-[20%] w-full sm:h-screen md:h-screen text-white'>

            <div className='max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>

                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>

                    <p className='py-6'>Check out some of my work right here</p>

                </div>

                <div className='grid sm-grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        projects.map(({ id, image, demoLink, codeLink }) => {
                            return <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={image} alt="project-images" className='rounded-md duration-200 hover:scale-105' />

                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500'> <a href={demoLink} target="_blank">Demo</a></button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500'><a href={codeLink} target="_blank">Code</a></button>
                                </div>
                            </div>
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default Projects
