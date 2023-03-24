import React from 'react'
import Marquee from "react-fast-marquee";

function Card({ data, direction }) {
    return (
        <div>
            <div className='my-5'>
                <Marquee pauseOnHover direction={direction} gradient={false} speed={20}>
                    {
                        data.map((skill, i) => {
                            return (
                                <div key={i} className=''>
                                    <img src={skill.img} alt={skill.title} />
                                </div>
                            )
                        })
                    }
                </Marquee>
            </div>
        </div>
    )
}

export default Card