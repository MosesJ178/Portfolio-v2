import React from 'react'

const WorkExperience = () => {
    return (
        <div className=''>
            <p className='tracking-widest text-2xl my-12 text-center underline uppercase neon font-semibold'>Work Experience</p>
            <div className='text-white sm:flex justify-between sm:max-w-xl lg:max-w-2xl xl:max-w-2xl mx-auto'>
                <div className='border_shadow sm:w-[20rem] mx-auto w-[90%] h-[7rem] sm:mt-[1rem]'>
                    <p className='pl-1 text-xl'>Skyland E Solutions</p>
                    <p className='pl-1'>Full Stack Developer | Internship</p>
                    <p className='pl-1'>Dec 2022 - May 2023</p>
                </div>
                <div className='border_shadow sm:w-[20rem] mx-auto w-[90%] h-[7rem] mt-[4rem] sm:mt-[15rem]'>
                    <p className='text-xl pl-1'>CryproTrunk</p>
                    <p className='pl-1'>Front End Developer | Internship</p>
                    <p className='pl-1 text-sm'>Sep 2022 - Nov 2022</p>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
