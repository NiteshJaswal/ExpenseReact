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

      
</Card>

);
}
export default Expenses;
