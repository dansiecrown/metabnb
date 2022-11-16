import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className='column images'>
                <div className="logowhite">
                    <img src="./assets/logowhite/Vector-1.png" alt="logo" />
                    <img src='./assets/logowhite/Vector.png' alt="logo" />
                </div>
                <div className="social">
                    <img src="./assets/fb.png" alt="facebook" />
                    <img src="./assets/insta.png" alt="instagram" />
                    <img src="./assets/twitter.png" alt="twitter" />
                </div>

                <div className="copy">
                    <p>&copy; 2022 MetaBnB</p>
                </div>
            </div>

            <div className='column'>
                <h3>Community</h3>
                <p>NFT</p>
                <p>Tokens</p>
                <p>Landlords</p>
                <p>Discord</p>
            </div>
            <div className='column'>
                <h3>Places</h3>
                <p>Castle</p>
                <p>Farms</p>
                <p>Beaches</p>
                <p>Learn more</p>
            </div>

            <div className='column'>
                <h3>About Us</h3>
                <p>Roadmap</p>
                <p>Creators</p>
                <p>Career</p>
                <p>Contact Us</p>
            </div>
        </div>
    )
}
