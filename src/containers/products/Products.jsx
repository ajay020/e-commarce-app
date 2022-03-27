import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Product } from "../../components";
import { fetchProducts } from "../../redux/product/productActions";
import "./products.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (products.length === 0) {
    return <h3 style={{ margin: "8rem" }}>Loading...</h3>;
  }

  return (
    <div className="product_container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
