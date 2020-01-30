import React from 'react';
import './Card.scss';



function Card({ car, filtered, setFiltered }) {
	if (!car) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className='card'>
			<h1>{car.make}</h1>
			<h2>{car.model}</h2>
			<img src={car.image} />

			<p>
				VIP Price: <span className='price'>${car.price.toLocaleString()}</span>
			</p>
		</div>
	);
}

export default Card;
