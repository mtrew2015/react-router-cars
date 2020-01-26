import React, { useState, useEffect } from 'react';
import './Car.scss';
import { useParams } from 'react-router-dom';
import './Car.scss';

function Car({ cars, setCars }) {
	const { id } = useParams();
	const [ car, setCar ] = useState({});

	useEffect(() => {
		const actualCar = cars.filter((car) => {
			return car.id == id;
		});
		setCar(actualCar[0]);
	}, []);

	console.log(car, 'car');

	if (!car) {
		return <h1>OH No That Car is Sold!</h1>;
	}
	return (
		<div className='car-container'>
			<div className='card'>
				<h1>{car.make}</h1>
				<p>{car.model}</p>
				<p>${car.price}</p>
				<p>Call for more details</p>
			</div>
		</div>
	);
}

export default Car;
