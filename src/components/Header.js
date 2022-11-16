import React from 'react'

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="./assets/icon.png" alt='logo' className="logo-icon" />
                <img src="./assets/meta.png" alt='logo' className="logo-text" />
            </div>

            <nav className="nav">
                <a className='nav-link' href="#">Home</a>
                <a className='nav-link' href="#">Place to stay</a>
                <a className='nav-link' href="#">NFTs</a>
                <a className='nav-link' href="#">Community</a>
            </nav>

            <div className="buttons">
                <button className="btn">Connect Wallet</button>
            </div>
        </div>
    )
}
