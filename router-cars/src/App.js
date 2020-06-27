import React, { useState, useEffect } from 'react';
import { data } from './data';
import './App.scss';
import { Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Form from './Components/Form/Form';
import Car from './Components/Car/Car';
import {server} from './axios';

function App() {
    const [ cars, setCars ] = useState([]);
    
 

	useEffect(() => {
        server.get('/cars')
        .then(res => setCars(res.data))
	}, []);

	return (
		<div className='App'>
			<Route path='/' exact>
				<Landing cars={cars} setCars={setCars} />
			</Route>

			<Route path='/add'>
				<Form cars={cars} setCars={setCars} />
			</Route>

			<Route path='/cars/:id'>
				<Car cars={cars} setCars={setCars} />
			</Route>
		</div>
	);
}

export default App;
