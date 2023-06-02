import React from 'react'
import Introduction from './Introduction';
import "../index.css";
import { stack1 } from '../assets/data/content';
import { stack2 } from '../assets/data/content';
import MarqueeAnimation from './MarqueeAnimation';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

function Home() {
    return (
        <div>
            <div className='overflow-hidden'>
                <Introduction />
                <About/>
                <p className='tracking-widest text-2xl my-12 text-center underline uppercase neon font-semibold'>TECH STACK</p>
                <MarqueeAnimation stack1={stack1} direction="left" />
                <MarqueeAnimation stack1={stack2} direction="right" />
                <WorkExperience/>
                <Projects/>
                <Contact/>
            </div>
        </div>
    )
}

export default Home