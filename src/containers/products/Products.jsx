import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Product } from "../../components";
import { fetchProducts } from "../../redux/product/productActions";
import "./products.css";

const Products = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.product.products);
  const searchQuery = useSelector((state) => state.product.searchQuery);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let productlist = products;

  if (searchQuery) {
    console.log(searchQuery);
    productlist = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery)
    );
    console.log(productlist);
  }

  if (products.length === 0) {
    return <h3 style={{ margin: "8rem" }}>Loading...</h3>;
  }

  return (
    <div className="product_container">
      {productlist.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
