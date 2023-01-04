import React from 'react'
const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 pt-96 py-[50%] text-white'>

            <div className='flex flex-col p-4 justify-center max-w-lg mx-auto h-full'>

                <div className='pb-2'>

                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>

                    <p className='py-2'>
                        Submit the form below to get in touch with me
                    </p>
                </div>

                <div className='flex justify-center items-center'>

                    <form action="https://getform.io/f/74887d40-7817-4562-9fff-f7bcebb5b9e0" method='POST' className='flex flex-col w-full md:w-3/3'>

                        <input
                            type="text"
                            name='name'
                            placeholder='Enter your name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />

                        <input
                            type="text"
                            name='email'
                            placeholder='Enter your email'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'
                        />

                        <textarea
                            name="message"
                            placeholder='Enter your message'
                            rows="8"
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        ></textarea>

                        <button
                            className='text-white bg-gradient-to-b from-purple-500 to-orange-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold'
                        >
                            Let's talk
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Contact
