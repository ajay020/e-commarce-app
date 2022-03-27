import { Link } from "react-router-dom";
import "./product.css";

// BEM -> block element modifire

const Product = ({ product }) => {
  const { id, title, image, price } = product;

  return (
    <div className="product">
      <Link to={`/product-detail/${id}`} className="product__link">
        <img src={image} />
        <div className="product__desc">
          <h6>{title}</h6>
          <p>Price: ${price}</p>
          <p>Available: yes</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
