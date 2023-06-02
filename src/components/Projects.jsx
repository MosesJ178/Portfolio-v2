import React from 'react'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.png'

const Projects = () => {
    return (
        <div className='text-center flex flex-col items-center sm:max-w-xl my-5 lg:max-w-2xl xl:max-w-2xl mx-auto'>
            <p className='tracking-widest text-2xl my-12 text-center underline uppercase neon font-semibold'>Projects</p>
            <div className='w-full flex flex-col items-center p-5'>
                <a href='https://skylandesolutions.netlify.app/' className='w-[20rem] h-[12rem] flex flex-col items-center justify-center'>
                    <p className='uppercase tracking-wide bg-blue-500 w-[90%] py-1'>Real time issue ticket MERN application</p>
                    <img src={t2} className='w-[90%] h-[90%]' alt="" />
                </a>
                <a href='https://cryptotrunk.vercel.app/' className='w-[20rem] h-[12rem] flex flex-col items-center justify-center mt-10'>
                    <p className='uppercase tracking-wide bg-blue-500 w-[90%] py-1'>UI/UX Developer</p>
                    <img src={t3} className='w-[90%] h-[80%] border border-slate-400' alt="" />
                </a>
                <a href='https://github.com/MosesJ178' className='mt-5 text-blue-500 cursor-pointer font-semibold'>more projects...</a>
            </div>
        </div>
    )
}

export default Projects
