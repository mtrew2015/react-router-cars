import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Landing.scss';
import { Link } from 'react-router-dom';
import * as google from 'google-parser';
import photo from '../../Assets/coming-soon-2550190_1280.jpg';

function Landing({ cars, setCars }) {
	const [ input, setInput ] = useState('');
	const [ filtered, setFiltered ] = useState([]);

	useEffect(
		() => {
			setFiltered(cars);
		},
		[ cars ],
	);

	useEffect(
		() => {
			console.log('is this running');
			if (filtered.length && !filtered[0].image) {
				let addImages = [];
				const grabImages = async () => {
					filtered.forEach(async (car) => {
						await google.jpg(`${car.make} ${car.model}`, true).then((res) => {
							console.log(res);

							if (res.length) {
								if (!res[0].img.includes('webp')) {
									car.image = res[0].img;
								} else {
									car.image = photo;
								}
							}
							console.log(car, 'car here');
							addImages = [ ...addImages, car ];
							console.log(addImages, 'add images');
						});
						if (addImages.length === filtered.length) {
							setFiltered(addImages);
						}
					});
				};

				grabImages();

				console.log('made it here');
			}
		},
		[ filtered ],
	);

	console.log(filtered, 'filtered');

	const submitHandler = (e) => {
		console.log('clicked');
		e.preventDefault();
		setInput(e.target.value);
		const fil = cars.filter((el) => {
			console.log(input === el.make, el.make);
			return (
				el.model.toLowerCase().includes(input.toLowerCase()) || el.make.toLowerCase().includes(input.toLowerCase())
			);
		});

		setFiltered(fil);
	};

	return (
		<div className='wrapper'>
			<div className='search-bar-section'>
				<input
					onClick={(e) => console.log('clicked')}
					onChange={(e) => submitHandler(e)}
					name='search'
					placeholder='Enter A Model Or Make'
				/>
				<button onClick={(e) => e.preventDefault()} className='search-button'>
					Search
				</button>
				<button
					className='clear-filters'
					onClick={(e) => {
						e.preventDefault();
						setFiltered(cars);
					}}>
					Clear Filters
				</button>
				<Link className='add' to='/add'>
					Add New Car
				</Link>
			</div>
			<div className='car-section'>
				{filtered.map((car) => {
					return (
						<Link key={car.id} to={`/cars/${car.id}`}>
							<Card setFiltered={setFiltered} filtered={filtered} car={car} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Landing;
