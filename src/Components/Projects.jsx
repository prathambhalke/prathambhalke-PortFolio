import React from 'react'
import PortFolio from "../assets/PortFoilo.png"
import ViteKart from "../assets/ViteKart.png"
import Spotify from "../assets/Spotify.png"
import SnakeGame from "../assets/SnakeGame.png"
import WhetherApp from "../assets/WhetherApp.png"
import ShadowGen from "../assets/ShadowGen.png"

const Projects = () => {
    return (
        <div name="project" className='bg-gradient-to-b from-black to-gray-800 py-[35%] w-full md:h-screen text-white'>

            <div className='max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>

                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>

                    <p className='py-6'>Check out some of my work right here</p>

                </div>

                <div className='grid sm-grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    <div className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={PortFolio} alt="Portfolio" className='rounded-md duration-200 hover:scale-105' />

                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> <a href="#">Demo</a></button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/prathambhalke/prathambhalke-PortFolio">Code</a></button>
                        </div>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={ViteKart} alt="vitekart" className='rounded-md duration-200 hover:scale-105' />

                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> <a href="#">Demo</a></button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/prathambhalke/Vite-Kart" target="_blank">Code</a></button>
                        </div>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={Spotify} alt="spotify" className='rounded-md duration-200 hover:scale-105' />

                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> <a href="https://prathams-spotify.netlify.app/" target="_blank">Demo</a></button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/prathambhalke/Spotify-Clone" target="_blank">Code</a></button>
                        </div>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={SnakeGame} alt="snakegame" className='rounded-md duration-200 hover:scale-105' />

                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> <a href="https://glowing-profiterole-a5e3e6.netlify.app" target="_blank">Demo</a></button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/prathambhalke/Snake_game" target="_blank">Code</a></button>
                        </div>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={WhetherApp} alt="whetherapp" className='rounded-md duration-200 hover:scale-105' />

                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> <a href="https://codesandbox.io/s/github/prathambhalke/Whether-App-React" target="_blank">Demo</a></button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/prathambhalke/Whether-App-React" target="_blank">Code</a></button>
                        </div>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={ShadowGen} alt="shadowGen" className='rounded-md duration-200 hover:scale-105' />

                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> <a href="https://codesandbox.io/s/github/prathambhalke/Box-Shadow-Generator" target="_blank">Demo</a></button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/prathambhalke/Box-Shadow-Generator" target="_blank">Code</a></button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Projects
