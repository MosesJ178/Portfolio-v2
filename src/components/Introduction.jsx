import React from 'react'
import '../index.css';
import BlockDesign from "../components/BlockDesign";
import '../index.css'

function Introduction({ dark }) {
    return (
        <div className='text-white flex flex-col justify-center items-center'>
            <div className='relative top-[-35px] rounded-2xl w-[240px] border-b- h-[170px] roboGrad'>
                <div className='absolute w-[213px] rounded-2xl bg-[#191c24] h-[150px] top-[9px] left-[14px]'>
                    <div className='flex bg-[#191c24] justify-center'>
                        <div className='eyes w-[40px] h-[40px] rounded-full mx-[20px] mt-[30px] bg-white'></div>
                        <div className='eyes w-[40px] h-[40px] rounded-full mx-[20px] mt-[30px] bg-white'></div>
                    </div>
                    <div className='smile mx-auto mt-5 bg-white'></div>
                </div>
            </div>
            <div className='flex pt-[0px] items-center'>
                <img src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png"
                    className='sm:w-[70px] img_resp sm:h-[70px] w-[50px] h-[50px]'
                    alt="hi" />
                <div className='sm:text-6xl name_neon font-bold mt-2 ml-1 flex items-center'>
                    <p className='neon'>Hi, i m Moses J</p>
                </div>
            </div>
            <div>
                <div className='sm:text-3xl text-xl flex items-center tracking-widest mt-3'>
                    <p className='text-3xl text-center resp_text font-semibold bg-gradient-to-r from-orange-600 via-yellow-600 to-yellow-200 bg-clip-text text-transparent'>Full Stack Developer</p>
                </div>
            </div>
            <BlockDesign />
            <div className='mt-[270px]'>
                <div className='buttons sm:w-[350px] w-[200px] h-[40px] flex justify-between'>
                    <a className='px-2 pt-1 border-b-8 select-none border-2 cursor-pointer rounded-lg hover:bg-slate-600'>Resume</a>
                    <a className="px-2 pt-1 border-b-8 select-none border-2 cursor-pointer rounded-lg hover:bg-slate-600">Experience</a>
                </div>
            </div>
        </div>
    )
}

export default Introduction