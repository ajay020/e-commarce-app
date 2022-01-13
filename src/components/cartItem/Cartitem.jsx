import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/cart/cartActions";
import "./cartItem.css";

const CartItem = ({ item: { id, image, title, price } }) => {
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <div className="cart-item">
      <img src={image} alt="picture" />
      <div className="cart-item_desc">
        <p>{title}</p>
        <p>Price: {price}</p>
        <button onClick={() => deleteItem(id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
