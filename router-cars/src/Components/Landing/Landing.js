import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import './Landing.scss';
import {Link} from 'react-router-dom';

function Landing({ cars, setCars }) {
    const [input, setInput] = useState('')
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        setFiltered(cars)
    }, [cars])

    const submitHandler = e => {
        e.preventDefault();
        console.log(cars)
        const fil = cars.filter(el => {
            return el.model === input
        })

        setFiltered(fil)
    }
	return (
        <div className="car-section">
        <form onSubmit={(e) => submitHandler(e)}>
        <input name="search" placeholder="Enter A Model" onChange={(e) => setInput(e.target.value) }/>
        <button>Search</button>
        </form>
        <button onClick={() => setFiltered(cars)}>Clear Filters</button>
        
        <Link to="/add">Add A New Car To Inventory</Link>
			{filtered.map((car) => {
                return <Link key={car.id} to={`/cars/${car.id}`}><Card car={car}/></Link>
            })}
		</div>
	);
}

export default Landing;
