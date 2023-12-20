import React from 'react'
import '../index.css';
import BlockDesign from "../components/BlockDesign";
import '../index.css'
import { Link, animateScroll as scroll } from 'react-scroll';

function Introduction({ dark }) {
    const [isShowAnimation, setIsShowAnimation] = React.useState(false);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setIsShowAnimation((prev) => !prev);
        }, 1000)
        return () => clearInterval(timer);
    }, [])
    return (
        <div className='text-white flex flex-col justify-center items-center'>
            <div className='relative top-[-35px] overflow-hidden rounded-2xl w-[220px] border-b- h-[162px]'>
                <div className='w-[120%] aspect-square absolute -top-[2.5rem] -left-[1.2rem] bg-red-500 roboGrad z-10'></div>
                <div className='absolute z-[10] w-[213px] rounded-2xl bg-[#191c24] h-[150px] top-[9px] left-[3px]'>
                    <div className='flex bg-[#191c24] justify-center'>
                        {
                            Array.from({ length: 2 }).map((_, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`${isShowAnimation ? 'animate-blink eyes' : ''} w-[28px] h-[40px] rounded-[1rem] mx-[20px] mt-[30px] bg-white`}>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='smile mx-auto mt-5 bg-white'></div>
                </div>
            </div>
            <div className='flex pt-[0px] items-center'>
                {/* <img src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png"
                    className='sm:w-[70px] img_resp sm:h-[70px] w-[50px] h-[50px]'
                    alt="hi" /> */}
                <div className='sm:text-5xl text-[22px] text-[#03e9f4] sm:block hidden'>&lt;&gt;</div>
                <div className='sm:text-6xl name_neon font-bold mt-2 ml-1 flex items-center'>
                    <p>Hi, i m <span className='flicker neon'>Moses J</span></p>
                </div>
                <div className='sm:text-5xl text-[22px] text-[#03e9f4] sm:block hidden'>&lt;/&gt;</div>
            </div>
            <div>
                <div className='sm:text-3xl text-xl flex items-center tracking-widest mt-3'>
                    <p className='text-3xl text-center resp_text font-semibold bg-gradient-to-r from-orange-600 via-yellow-600 to-yellow-200 bg-clip-text text-transparent'>Full Stack Developer</p>
                </div>
            </div>
            <BlockDesign />
            <div className='mt-[270px]'>
                <div className='buttons sm:w-[350px] w-[300px] h-[40px] flex justify-between'>
                    <a download={true} id='demo' href='https://drive.google.com/file/d/1fEptkIJR3zF-dNqAMWRaO2-srWXAKeCw/view?usp=drive_link'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Resume
                    </a>
                    <Link className='flex justify-center items-center' to='experience' id='demo2' spy={true} smooth={true} offset={-40} duration={500}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Experience
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Introduction