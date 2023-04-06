import React from 'react'
import '../index.css';
import BlockDesign from "../components/BlockDesign";
import web3 from "../assets/web3.png";

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
            <div className='flex pt-[0px]'>
                <img src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png"
                    className='sm:w-[70px] sm:h-[70px] w-[40px] h-[40px]'
                    alt="hi" />
                <div className='sm:text-6xl text-3xl name_neon font-bold mt-2 ml-1 flex items-center'>
                    <p className='neon'>Hi, i m Moses J</p>
                </div>
            </div>
            <div>
                <p className='sm:text-3xl text-xl  flex items-center tracking-widest mt-3'>
                    <img src={web3} className='sm:w-30 ml-10 sm:ml-0 sm:h-20 w-22 h-10' alt="" />
                    <p className='mb-1 bg-gradient-to-r from-purple-700 bg-clip-text text-transparent'>◗EVELOPER</p></p>
            </div>
            <BlockDesign />
            <div className='mt-[270px]'>
                <div className='buttons sm:w-[350px] w-[200px] h-[40px] flex justify-between'>
                    <a className='px-2 border-2 cursor-pointer'>Resume</a>
                    <a className="px-2 border-2 cursor-pointer">Experience</a>
                </div>
            </div>
        </div>
    )
}

export default Introduction