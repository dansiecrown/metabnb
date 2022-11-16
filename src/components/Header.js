import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ showToggle }) {


    const [showHam, setShowHam] = React.useState(false);


    const toggleHam = () => {
        setShowHam(!showHam);

    }


    return (
        <div className="header">
            <div className="logo">
                <img src="./assets/icon.png" alt='logo' className="logo-icon" />
                <img src="./assets/meta.png" alt='logo' className="logo-text" />
            </div>

            <nav className="nav">
                <Link className='nav-link' to={'/'}>Home</Link>
                <Link className='nav-link' to={"/stay"}>Place to stay</Link>
                <a className='nav-link' href="#">NFTs</a>
                <a className='nav-link' href="#">Community</a>
            </nav>

            {
                showHam ?
                    <nav className="nav-mobile">
                        <button onClick={() => toggleHam()} ><img src='./assets/close.png' alt='close' /></button>
                        <Link className='nav-link' to={'/'}>Home</Link>
                        <Link className='nav-link' to={"/stay"}>Place to stay</Link>
                        <a className='nav-link' href="#">NFTs</a>
                        <a className='nav-link' href="#">Community</a>
                    </nav> : null
            }



            <div className="buttons">
                <button className="btn" onClick={() => showToggle()}>Connect Wallet</button>
            </div>

            <div className="hamburger">
                <button onClick={() => toggleHam()}>
                    <span className="material-symbols-outlined" >
                        menu
                    </span>
                </button>
            </div>

        </div>
    )
}
