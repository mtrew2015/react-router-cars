import React from 'react'
import {useForm} from 'react-hook-form'
import './Form.scss'
import {useHistory} from 'react-router-dom';
 
function Form({setCars, cars}) {
     const {register, handleSubmit, watch, errors} = useForm()
     const history = useHistory()

     const onSubmit = data =>{
        const carToBeAdded = {...data, id:Math.random()}
        setCars([...cars, carToBeAdded])
        history.push('/')
     } 
    return (
        <div className="form-wrapper">
            <h1>Add A Car</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Make" name="make" ref={register({required: true})} />
            {errors.make && <span>Make is required</span>}
            <input placeholder="Model" name="model" ref={register({required: true})} />
            {errors.model && <span>Model is required</span>}
            <input placeholder="Price" name="price" ref={register({required: true, pattern: [0-9]})} />
            {errors.price && <span>Price Must Be a Number</span>}
            <input type="submit"/>
            
            </form>
        </div>
    )
}

export default Form