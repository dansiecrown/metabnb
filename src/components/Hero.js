import React from 'react'

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1 className="hero-title">Rent a <mark className="hero-diff">Place</mark> away from <mark className="hero-diff"> Home</mark> in the <mark className="hero-diff"> Metaverse</mark></h1>
                <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className="search">
                    <input type="text" placeholder="Search for location" />
                    <button className="btn">Search</button>

                </div>
            </div>

            <div className="hero-right">
                <div className="left">
                    <img src="./assets/1.png" alt="hero" className="hero-img" />
                    <img src="./assets/2.png" alt="hero" className="hero-img" />

                </div>
                <div className="right">
                    <img src="./assets/3.png" alt="hero" className="hero-img" />
                    <img src="./assets/4.png" alt="hero" className="hero-img" />
                </div>
            </div>
        </div>
    )
}
