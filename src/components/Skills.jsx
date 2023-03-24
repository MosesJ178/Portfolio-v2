import React from 'react'
import "../css/Button.css"
import { stack1, stack2 } from '../assets/data/content'
import Card from './Card'

function Skills() {
    return (
        <div className=' text-white'>
            <p className='text-xl flex justify-center tracking-widest'>Skills</p>
            <Card data={stack1} direction="left"/>
            <Card data={stack2} direction="right"/>
        </div>
    )
}

export default Skills