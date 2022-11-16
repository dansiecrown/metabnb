import React from 'react';
import { data } from '../data';

export default function Inspire() {

    const card = data.map((item) => {
        return (
            < div className="inspire-card" key={item.id} >
                <img src={item.img} alt="inspire" className="inspire-img" />
                <div className="card-text1">
                    <p>{item.title}</p>
                    <p className='price-text'>{item.price}</p>
                </div>
                <div className="card-text1">
                    <p>{item.distance}</p>
                    <p>{item.duration}</p>
                </div>
                <img className="stars" src="./assets/stars.png" alt="stars" />
            </div >
        )
    })
    return (
        <div className="inspire">
            <h1>Inspiration for your next adventure</h1>
            <div className="card-container">
                {card}
            </div>
        </div>
    )
}
