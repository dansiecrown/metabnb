import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Wallets from '../components/Wallets';
import Inspire from '../components/Inspire';
import Nfts from '../components/Nfts';
import Footer from '../components/Footer';
import Modal from '../pages/Modal'


export default function Home() {
    const [showModal, setShowModal] = useState(false);

    const showToggle = () => {
        setShowModal(!showModal);
    }

    return (
        <div className='home'>
            <Header showToggle={showToggle} />
            <Hero />
            <Wallets />
            <Inspire />
            <Nfts />
            <Footer />
            {showModal ? <Modal showToggle={showToggle} /> : null}

        </div>
    )
}
