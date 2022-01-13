import { useSelector } from "react-redux";
import CartItem from "../cartItem/Cartitem";
import "./cart.css";
import { useState } from "react";

const Cart = () => {
  const [popup, setPopup] = useState(false);
  const shoppingList = useSelector((state) => state.cart.shoppingItems);
  const totalPrice = shoppingList.reduce(
    (total, item) => (total += item.price),
    0
  );

  const togglePopup = () => {
    setPopup(!popup);
  };

  const cartItems = shoppingList.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const emptyCartMsg = (
    <div className="cart__empty-msg">
      <h4> Cart is Empty </h4>
    </div>
  );

  const OrderPlacedPopup = () => {
    return (
      <div
        className="popup-model"
        id={popup && "model"}
        onClick={() => setPopup(false)}
      >
        <div className="popup-model_content">
          <p>Order placed Successfully</p>
          <span onClick={togglePopup}>&times;</span>
        </div>
      </div>
    );
  };

  return (
    <div className="cart">
      <OrderPlacedPopup />
      {shoppingList.length == 0 && emptyCartMsg}
      <div className="cart__item-list">{cartItems}</div>
      {shoppingList.length !== 0 && (
        <div className="cart__buy-items">
          <h6>Price Details</h6>
          <div className="cart__buy-items_container">
            <div>
              <p>Price ({shoppingList.length} items)</p>
              <span>{totalPrice.toFixed(2)}</span>
            </div>
            <div>
              <p>Discount</p>
              <span>-</span>
            </div>
            <div>
              <p>Delivery Charges</p>
              <span>Free</span>
            </div>
            <div>
              <p>Total Amount</p>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button onClick={togglePopup}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
