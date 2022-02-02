import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import { useContext } from 'react';
import CartContext from '../../context/cart-context';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx=useContext(CartContext)
const addItemHandler =(amount)=> {
  const newItem={
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
  }
  cartCtx.addItem(newItem)
}
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addToCart={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
