import React from "react";
import { AppProvider } from "./context/AppContext";

import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ExpenseList from "./components/ExpenseList";
import AddExpenseItem from "./components/AddExpenseItem";

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>My Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Display type='secondary' name='Budget' amount='$2000' />
          </div>
          <div className='col-sm'>
            <Display type='success' name='Remaining' amount='$500' />
          </div>
          <div className='col-sm'>
            <Display type='primary' name='Spent so far' amount='$1500' />
          </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseItem />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
