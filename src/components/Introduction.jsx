import React from 'react'
import '../index.css';
import BlockDesign from "../components/BlockDesign";

function Introduction({ dark }) {
    return (
        <div className='dark:text-white flex flex-col justify-center items-center'>
            <div className='flex'>
                <img src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png"
                    className='sm:w-[70px] sm:h-[70px] w-[40px] h-[40px]'
                    alt="hi" />
                <div className='sm:text-6xl text-4xl font-bold mt-2 ml-1 flex items-center'>
                    <p className={(dark) ? 'neon' : ''}>Hi, i m Moses J</p>
                </div>
            </div>
            <div className=''>
                <p className='sm:text-2xl text-xl tracking-widest mt-3'>₩EB3 ◗EVELOPER</p>
            </div>
            <BlockDesign />
            <div className='mt-[300px]'>
                <div className='buttons sm:w-[350px] w-[200px] h-[40px] flex justify-between'>
                    <a className='px-2 border-2 cursor-pointer'>Resume</a>
                    <a className="px-2 border-2 cursor-pointer">Experience</a>
                </div>
            </div>
        </div>
    )
}

export default Introduction