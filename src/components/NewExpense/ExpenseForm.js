import React, {useState} from 'react';
import './ExpenseForm.css';

const ExPenseForm = (props)=>{
 
    const [enterTitle , setEnterTitle] = useState ('');
    const [enterAmount, setAmount]= useState ('');
    const [enterDate, setDate]= useState('');
    

    const titleChangeHandler =(event)=>{
    setEnterTitle(event.target.value);
    console.log(enterTitle)
    };
const amountChangeHandler =(event)=>{
    setAmount(event.target.value);
    console.log(enterAmount);
}

const dateChangeHandler =(event)=>{
    setDate(event.target.value);
    console.log(enterDate);

}

const submitHandler =(event)=>{
  event.preventDefault();
  const expenseData ={
      title:enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
  }
 // console.log(expenseData)
 props.onSaveExpenseData(expenseData);
  setEnterTitle('');
  setAmount('');
  setDate('');

}


    return (
        <form onSubmit={submitHandler}>  
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input value={enterAmount} type="number" min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input value={enterDate} type='date' min='2019-01-01' max='2023-04-15' onChange={dateChangeHandler}/>
                </div>

            </div>
         <div className='new-expense_action'>
              <button type='button' onClick={props.onCancel}>Cancel</button>
             < button type='submit'>Add Expense</button>
         </div>
        </form>
    )

}
export default ExPenseForm;