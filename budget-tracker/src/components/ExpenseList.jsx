import {React, useContext} from 'react'
import ExpenseItems from './ExpenseItems';

import { AppContext } from '../context/AppContext';

const ExpensiveList = () => {
    const {expenses} = useContext(AppContext) 
  return (
    <ul className='list-group'>
        {expenses.map((expense) => (
            <ExpenseItems id={expense.id} name={expense.name} amount={expense.amount} />
        ) )}
    </ul>
  )
}

export default ExpensiveList