import React from 'react'

export default function Menu() {
    return (
        <div className='menu'>
            <nav>

                <a href="#">Restaurant</a>
                <a href="#">Cottage</a>
                <a href="#">Castle</a>
                <a href="#">Fantast City</a>
                <a href="#">beach</a>
                <a href="#">Carbins</a>
                <a href="#">Off-grid</a>
                <a href="#">Farm</a>
                <div className="menu-btn">
                    <div>
                        <a href="#">Location</a>
                        <img src="./assets/settings.png" alt="settings" />
                    </div>
                </div>
            </nav>
        </div>
    )
}
