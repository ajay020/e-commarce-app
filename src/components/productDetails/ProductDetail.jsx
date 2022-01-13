import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartActions";
import "./productDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const { title, image, price, description, category, rating } = useSelector(
    (state) => state.product.products.find((p) => p.id == productId)
  );
  const dispatch = useDispatch();
  const addItemToCart = () => {
    const item = {
      id: productId,
      title,
      image,
      price,
    };
    dispatch(addToCart(item));
  };

  return (
    <div className="product-details">
      <div className="product-details_product-img">
        <img src={image} alt="picture" />
      </div>
      <div className="product-details_product-info">
        <button onClick={addItemToCart}>Add to Cart</button>

        <h6>{category}</h6>
        <p>
          Price: <strong> $ {price}</strong>
        </p>
        <h4>{title}</h4>
        <p>
          Rating: <span> {rating.rate}</span>
        </p>
        <p>Item-Left: {rating.count}</p>
        <h6>Product Description:</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
