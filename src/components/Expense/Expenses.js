import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js");
    // console.log(selectedYear);
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses ={filteredExpenses}/>
       <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};
export default Expenses;
