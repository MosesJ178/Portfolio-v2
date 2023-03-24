import React from 'react'
import "../index.css";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";


function ButtonTheme({ dark, updateTheme }) {
    return (
        <div className='flex justify-end p-4'>
            <button
                className={`${(dark) ? 'p-4 rounded-full bg-white/20' : 'p-3 rounded-full bg-slate-200'}`}
                onClick={() => updateTheme()}>
                {dark ? <BsMoonStarsFill className='text-white text-xl' /> : <BsFillSunFill className='text-yellow-500 text-xl' />}
            </button>
        </div>
    )
}

export default ButtonTheme