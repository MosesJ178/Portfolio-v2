import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeAnimation = ({stack1, direction}) => {
    return (
        <Marquee speed={50} className='sm:max-w-xl my-5 lg:max-w-2xl xl:max-w-2xl mx-auto' direction={direction} gradient={false}>
            {
                stack1.map((tech, i) => {
                    return (
                        <div key={i}>
                            <img src={tech.img} className='w-full h-8' alt={tech.title} />
                        </div>
                    )
                })
            }
        </Marquee>
    )
}

export default MarqueeAnimation
