import React , {useState , useEffect} from 'react';
import NewExpense from './components/New Expense/NewExpense';
//it is for component

//import ExpenseItems from './components/ExpenseItems';
import Expenses from './components/Expenses/Expenses';

    let dumExpense = [

     




        // {
        //     id: 'e1',
        //     title: "school fee",
        //     amount: 250,
        //     date: new Date(2022 , 12 , 8)
        // },
        // {
        //     id: 'e2',
        //     title: "house fee",
        //     amount: 200,
        //     date: new Date(2022 , 12 , 8)
        // },
        // {
        //     id: 'e3',
        //     title: "tution fee",
        //     amount: 850,
        //     date: new Date(2022 , 12 , 8)
        // },
        // {
    //         id: 'e4',
    //         title: "food",
    //         amount: 600,
    //         date: new Date(2022 , 12 , 8)
    //     }
        
     ];
    const App= ()=>{
const [expenses , setExpenses ] = useState(dumExpense);


useEffect(()=>{
    fetch('http://localhost:3000/users').then(
        response =>{
            return response.json();
        }
      ).then(
     data =>{
        console.log(data);
        setExpenses(data)
     }
      );
},[])
      

    const addExpenseHandler = (expense) =>{
        const updateExpense = [expense , ...expenses]
       setExpenses(updateExpense);
    }
    // let expenseDate = new Date(2022 , 8 , 16);
    // let expenseTitle = "School fee";
    // let expenseAmount = 300;
    return (
         <div>
     
      <NewExpense onAddExpense={addExpenseHandler }/>
    <Expenses item= {expenses} /> </div>
    );
    }

export default App;


 /* /* <ExpenseItems 
       date= {expenses[0].date}
       title = {expenses[0].title} 
       amount = {expenses[0].amount}>
        </ExpenseItems> 
        <ExpenseItems 
       date= {expenses[1].date}
       title = {expenses[1].title} 
       amount = {expenses[1].amount}>
        </ExpenseItems>
        <ExpenseItems 
        date= {expenses[2].date}
        title = {expenses[2].title} 
        amount = {expenses[2].amount}>
        </ExpenseItems>
        <ExpenseItems 
        date= {expenses[3].date}
        title = {expenses[3].title} 
        amount = {expenses[3].amount}>
       
        </ExpenseItems>   </div> //it should always be capital letter */ 