import React from 'react'
import { useState, useEffect } from "react";
import ButtonTheme from './ButtonTheme';
import Introduction from './Introduction';
import "../index.css";
import BlockDesign from './BlockDesign';

function Home() {
    return (
        <div className='min-h-screen'>
            <div>
                <Introduction/>  
            </div>
        </div>
    )
}

export default Home