import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // const expenseDate= new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
  //  const [title, setTitle]= useState(props.title);
  //  console.log("ExpenseItem evaluted by React");

  // const clickHandler = () => {
  //      setTitle("Updated!!");
  //      console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        {/* <div className="expense-item_descrieption"></div> */}

        <h2> {props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};
export default ExpenseItem;
