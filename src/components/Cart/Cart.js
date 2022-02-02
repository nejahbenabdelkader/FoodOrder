import { useContext } from "react";
import CartContext from "../context/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItems = cartCtx.items;

  const addItemToCartHandler= (item)=> {
      cartCtx.addItem({...item,amount:1})
  }
  const removeItemFromCarthandler=(id)=>{
    cartCtx.removeItem(id)
  }

  return (
    <Modal onClose={props.onClose}>
      <ul>
        {cartItems.map((item) => {
          return <CartItem  key={item.id} price={item.price} name={item.name}  amount={item.amount}  onAdd={addItemToCartHandler.bind(null,item)}  onRemove={removeItemFromCarthandler.bind(null,item.id)} />;
        })}
      </ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
