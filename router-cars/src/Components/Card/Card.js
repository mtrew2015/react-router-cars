import React from 'react'
import './Card.scss'
import photo from '../../Assets/coming-soon-2550190_1280.jpg'

 function Card({car}) {
     if (!car){
         return (<h1>Loading...</h1>)
     }
    return (
        <div className="card" >
            <h1>{car.make}</h1>
            <h2>{car.model}</h2>
            <img src={photo}></img>

            <p>VIP Price: <span className="price">${car.price.toLocaleString()}</span></p>
         </div>
    )
}

export default Card