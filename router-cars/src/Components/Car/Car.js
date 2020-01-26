import React, { useState, useEffect } from 'react';
import './Car.scss';
import { useParams } from 'react-router-dom';
import './Car.scss';
import photo from '../../Assets/coming-soon-2550190_1280.jpg';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Car({ cars, setCars }) {
	const { id } = useParams();
	const [ car, setCar ] = useState({});

	useEffect(() => {
		// axios.get()
		//.then(res => setCars(res.data))
		//.then(cars.filter)
		// optional axios but same kind of thought
		setTimeout(() => {
			const actualCar = cars.filter((car) => {
				return car.id == id;
			});
			setCar(actualCar[0]);
		}, 2500);
	}, []);

	console.log(car, 'car');

	if (!car || !car.price) {
		return (
			<div className='car-container'>
				<div className='car'>
					{<Skeleton className='car' height={100} width={400} />}
					{<Skeleton className='car' height={100} width={400} />}
					{<Skeleton className='car' height={100} width={400} />}
					{<Skeleton className='car' height={100} width={400} />}
				</div>
			</div>
		);
	}
	return (
		<div className='car-container'>
			<div className='car'>
				<h1>{car.make}</h1>
				<p>{car.model}</p>
				<img src={photo} />
				<p>
					VIP Price: <span className='price'>${car.price.toLocaleString()}</span>
				</p>
			</div>
		</div>
	);
}

export default Car;
