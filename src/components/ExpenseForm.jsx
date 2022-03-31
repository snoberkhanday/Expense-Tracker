import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //titleChangeHandler
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: event.target.value,
  // });

  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };

  //amountChangeHandler
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  // setUserInput({
  //   ...userInput,
  //   enteredAmount: event.target.value,
  // });

  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // };

  //dateChangeHandler
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // setUserInput({
  //   ...userInput,
  //   enteredDate: event.target.value,
  // });

  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: event.target.value };
  //   });
  // };

  //submitHandler
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            value={enteredAmount}
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
