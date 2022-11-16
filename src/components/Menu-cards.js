import React from 'react'
import { data2 } from '../data2'


export default function MenuCards() {
    const card = data2.map((item) => {
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
        <div className="menu-cards">
            {card}
        </div>
    )
}
