import React from 'react'
import { useState, useEffect } from "react";
import ButtonTheme from './ButtonTheme';
import Introduction from './Introduction';
import "../index.css";
import BlockDesign from './BlockDesign';

function Home() {
    const [dark, setdark] = useState(JSON.parse(localStorage.getItem('theme')));
    useEffect(() => {
        if (localStorage.getItem('theme') == null) {
            const store = window.matchMedia('(prefers-color-scheme: dark)').matches;
            console.log("i am exe", store, dark);
            localStorage.setItem('theme', JSON.stringify(store))
            setdark(store);
            console.log("i am exe", store, dark);
        }
    }, [])
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);
    const updateTheme = () => {
        setdark(!dark);
        localStorage.setItem('theme', !(JSON.parse(localStorage.getItem('theme'))));
    }
    return (
        <div className='dark:bg-black min-h-screen'>
            <div>
                <ButtonTheme dark={dark} updateTheme={updateTheme}/>
                <Introduction dark={dark}/>  
            </div>
        </div>
    )
}

export default Home