import React from 'react'
import { TiDelete } from 'react-icons/ti';


const ExpenseItems = (props) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
    {props.name}
    <div>
        <span className='badge bg-secondary badge-pill mr-3'>
            ${props.amount}
        </span>
        <TiDelete size='1.5em'></TiDelete>
    </div>
</li>
  )
}

export default ExpenseItems