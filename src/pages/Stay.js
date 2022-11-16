import React, { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import MenuCards from '../components/Menu-cards';
import Footer from '../components/Footer';
import Modal from '../pages/Modal'

export default function Stay() {
    const [showModal, setShowModal] = useState(false);

    const showToggle = () => {
        setShowModal(!showModal);
    }
    return (
        <div className='stay'>
            <Header showToggle={showToggle} />
            <Menu />
            <MenuCards />
            <Footer />
            {showModal ? <Modal showToggle={showToggle} /> : null}

        </div>
    )
}