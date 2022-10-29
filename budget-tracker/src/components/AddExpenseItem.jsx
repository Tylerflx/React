import {React, useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {AppContext} from '../context/AppContext'


const AddExpenseItem = () => {
    const {dispatch} = useContext(AppContext);

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')


    //onsubmit event function
    //explain: onsubmit, create id, get name and amount from form
    //then use context to pass the add method
    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            amount: parseInt(amount)
        }

        dispatch({
            type: 'ADD',
            payload: expense
        })
        
    }
  return (
    <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm">
                <label htmlFor="name">Name</label>
                    <input type="text" 
                    id="name" 
                    className='form-control' 
                    required='required' 
                    onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="col-sm">
                <label htmlFor="amount">Amount</label>
                <input type="text" 
                className='form-control' 
                required='required' 
                id='amount'  
                onChange={(event) => setAmount(event.target.value)}/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <button type="submit" className='btn btn-primary mt-3'>Save</button>
            </div>
        </div>
    </form>
  )
}

export default AddExpenseItem