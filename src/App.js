import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Kitchen Towel",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Groccery",
    amount: 200,
    date: new Date(2021, 7, 8),
  },
  {
    id: "e3",
    title: "stationary",
    amount: 55,
    date: new Date(2021, 10, 25),
  },

  {
    id: "e4",
    title: "New Desk(wooden)",
    amount: 450,
    date: new Date(2022, 8, 26),
  },
];
const App = () => {
  const [expenses, setExpenses]= useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log("In app.js");
    // console.log(expense);
    setExpenses(prevExpenses =>{
      return[expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};
export default App;
