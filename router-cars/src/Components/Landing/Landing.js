import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Landing.scss';
import { Link } from 'react-router-dom';

function Landing({ cars, setCars }) {
	const [ input, setInput ] = useState('');
	const [ filtered, setFiltered ] = useState([]);

	useEffect(
		() => {
			setFiltered(cars);
		},
		[ cars ],
	);

	const submitHandler = (e) => {
        console.log('clicked')
        e.preventDefault();
        setInput(e.target.value)
		const fil = cars.filter((el) => {
             console.log(input === el.make, el.make)
            return el.model.toLowerCase().includes(input.toLowerCase()) || el.make.toLowerCase().includes(input.toLowerCase())
           
		});

        setFiltered(fil);
    
	};
	return (
		<div className='wrapper'>
			<div className='search-bar-section'>
					<input onClick={(e) => console.log('clicked')} onChange={(e) => submitHandler(e)} name='search' placeholder='Enter A Model Or Make' />
					<button onClick={(e) => (e.preventDefault()) } className='search-button'>Search</button>
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
							<Card car={car} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Landing;
