import React from 'react'
import "../css/Button.css"
import { stack1, stack2 } from '../assets/data/content'
import Card from './Card'

function Skills() {
    return (
        <div className='flex justify-center flex-col items-center mt-10'>
            <p className='text-xl md:text-3xl tracking-widest'>Skills</p>
            <div className='sm:max-w-xl lg:max-w-2xl xl:max-w-2xl'>
                <Card data={stack1} direction="left" />
                <Card data={stack2} direction="right" />
            </div>
        </div>
    )
}

export default Skills