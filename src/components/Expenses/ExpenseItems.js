import React from 'react';
import './ExpenseItems.css';
import Expensedate from './Expensedate';
import Card from '../UI/Card';

const ExpenseItems = (props)=>{
  
return (
<Card className='expense-items'>
    <Expensedate date={new Date(props.date)} />
    <div className='expense-items_des'> <h2>{ props.title }</h2></div>       
     
      <div className='expense-items_cost'>  ${props.amount}</div>
      {/* <input type= "text"  value={newTitle} onChange={ changeHandler }/>
      <button onClick={clickHandler}>change title</button>       */}
</Card>

);
}
export default ExpenseItems;
