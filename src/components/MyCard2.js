import React, { useState } from 'react'
import './MyCard2.css'

export default function MyCard2({title, img, desc}) {
    const [clicked, setClicked] = useState(false);

    if (!clicked) {
        return (
            <div className="container" style={{ backgroundImage: `url(${img})` }}>
                <div className="title" onClick={() => setClicked(!clicked)}>
                    <p className="title__text">{title}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container" style={{ backgroundImage: `url(${img})` }}>
                <div className="title"  onClick={() => setClicked(!clicked)}>
                    <p className="title__text">{title}</p>
                </div>
                <div className="desc">
                        <p>{desc}</p>
                </div>
            </div>
        )
    }
    
}

