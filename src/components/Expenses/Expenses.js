import React from 'react';
import './Expenses.css';
import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';


const Expenses=(props)=>{
return( <Card className = "expenses">
      {
            props.item.map(
                  exp =>(
                        <ExpenseItems 
                        key= {exp.id}
                        date= {exp.date}
                        title = {exp.title} 
                        amount = {exp.amount}
                         />       
                  )
            )
      }
 {/* <ExpenseItems 
       date= {props.item[0].date}
       title = {props.item[0].title} 
       amount = {props.item[0].amount}
        /> 
        <ExpenseItems  
       date= {props.item[1].date}
       title = {props.item[1].title} 
       amount = {props.item[1].amount}/>
       
        <ExpenseItems 
        date= {props.item[2].date}
        title = {props.item[2].title} 
        amount = {props.item[2].amount}/>
       
        <ExpenseItems 
        date= {props.item[3].date}
        title = {props.item[3].title} 
        amount = {props.item[3].amount} />
        */}
      
</Card>

);
}
export default Expenses;