import react, { useReducer } from "react";
import CartContext from "./cart-context";
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedAmount =
        state.totalAmount + action.newItem.price * action.newItem.amount;

      let updatedItem;
      let updatedItems;
      const indexofUpdatedItem = state.items.findIndex((item) => {
        return item.id === action.newItem.id;
      });
      const existingCartItem = state.items[indexofUpdatedItem];
      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
        };
        updatedItem.amount = existingCartItem.amount + action.newItem.amount;
        updatedItems = [...state.items];
        updatedItems[indexofUpdatedItem] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.newItem);
      }
      console.log(updatedItems);
      return { items: updatedItems, totalAmount: updatedAmount };
    case "REMOVE":
      {console.log(action.id)
        let updatedItems;
        const indexofUpdatedItem = state.items.findIndex((item) => {
          return item.id === action.id;
        });
        const existingCartItem = state.items[indexofUpdatedItem];
        console.log(existingCartItem);
        const updatedAmount = state.totalAmount - existingCartItem.price;
        if (existingCartItem.amount === 1) {
          updatedItems = state.items.filter((item) => {
            return item.id !== action.id;
          });
        } else {
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount - 1,
          };
          updatedItems = [...state.items];
          updatedItems[indexofUpdatedItem] = updatedItem;
        }
        return { items: updatedItems, totalAmount: updatedAmount };
      }
      break;

    default:
      return { items: [], totalAmount: 0 };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(CartReducer, {
    items: [],
    totalAmount: 0,
  });
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", newItem: item });
  };
  const removeItemToCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
