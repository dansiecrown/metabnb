import React from 'react'

export default function Modal({ showToggle }) {
    return (
        <div className="modal">
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Connect Wallet</h4> <button onClick={() => showToggle()}><img src='./assets/close.png' alt='close' /></button>
                </div>
                <div className='modal-body'>
                    <p className='choose'>Choose your preferred wallet:</p>
                    <div className='meta'>
                        <div className='left'>
                            <img src='./assets/metaicon.png' className='meta-img' />
                            <p>Metamask</p>
                        </div>
                        <img src='./assets/right.png' className='right-icon' />
                    </div>
                    <div className='meta new'>
                        <div className='left'>
                            <img src='./assets/walletconnect.png' className='meta-img' />
                            <p>WalletConnect</p>
                        </div>
                        <img src='./assets/right.png' className='right-icon' />
                    </div>
                </div>

            </div>

        </div>
    )
}
