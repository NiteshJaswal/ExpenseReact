import React from 'react';
import './ExpenseItems.css';
import Expensedate from './Expensedate';
import Card from '../UI/Card';

const ExpenseItems = (props)=>{
  // const month = props.date.toLocaleString('en-US' , {month : 'long'});
  // const year =  props.date.getFullYear();
  // const day= props.date.toLocaleString('en-US' , {day : '2-digit'}); 
//   const [newTitle , setNewTitle]= useState(" ");

// const [title , setTitle]= useState(props.title);
 
// const clickHandler = () =>{
//            setTitle(newTitle);
// }
// const changeHandler = (event)=>{
//   setNewTitle(event.target.value);
// }  
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