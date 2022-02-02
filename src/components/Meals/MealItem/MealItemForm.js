import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const submitCartHandler = (event) => {
    event.preventDefault();
    const enteredAmount =+amountInputRef.current.value;
    props.addToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitCartHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
