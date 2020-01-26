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
        <div  className="wrapper">
        <div className="search-bar-section">
        <form onSubmit={(e) => submitHandler(e)}>
        <input name="search" placeholder="Enter A Model" onChange={(e) => setInput(e.target.value) }/>
        <button className="search-button">Search</button>
        <button className="clear-filters" onClick={(e) => {e.preventDefault() ;setFiltered(cars)}}>Clear Filters</button>
         <Link className="add" to="/add">Add New Car</Link>
        </form>
        
        </div>
        <div className="car-section">
       
        
			{filtered.map((car) => {
                return <Link key={car.id} to={`/cars/${car.id}`}><Card car={car}/></Link>
            })}
        </div>
		</div>
	);
}

export default Landing;
