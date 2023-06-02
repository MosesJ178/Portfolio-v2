import React from 'react'
import coder from '../assets/coder.png'
import linkedin from '../assets/sm/linkedin.png'
import instagram from '../assets/sm/instagram.png'
import gmail from '../assets/sm/gmail.png'



const Contact = () => {
    return (
        <div className='sm:max-w-xl relative mt-5 mb-10 lg:max-w-2xl xl:max-w-2xl mx-auto'>
            <div className='flex'>
                <img src={coder} className='w-[40%] h-[40%]' alt="" />
                <div className='mt-[4rem] sm:mt-[8rem]'>
                    <div className='flex'><p className='text-green-500 font-semibold'>#</p><p className='text-green-500 font-semibold'>Open To Work</p></div>
                    <div className='flex'><p className='text-green-500 font-semibold'>#</p><p className='text-green-500 font-semibold'>Open To Contribute</p></div>
                </div>
            </div>
            <p className='absolute top-5 left-1/2 -translate-x-1/2 tracking-widest text-2xl text-center underline uppercase neon font-semibold'>Connect</p>
            <div className='absolute flex top-[rem] left-1/2 -translate-x-1/2'>
                <a href="https://www.linkedin.com/in/moses-j-ba069624b/"><img src={linkedin} className='w-8' alt="" /></a>
                <a href="https://www.instagram.com/moses_j_gg/" className='mx-5'><img src={instagram} className='w-8' alt="" /></a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfbQfmfvmVMwGDZnXdTGjhXJhqlDRqkkfZrjtnrgZJldZXSQHFLvHxFfrgBZhCcGCWdnH"><img src={gmail} className='w-8' alt="" /></a>
            </div>
        </div>
    )
}

export default Contact
