import { useState } from "react";
import { RiMenu3Line, RiCloseLine, RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
      <p>
        <a href="#about">About</a>
      </p>
    </>
  );
};

const Navabr = () => {
  const [toggle, setToggle] = useState(false);
  const cartItemsCount = useSelector(
    (state) => state.cart.shoppingItems.length
  );
  return (
    <nav className="navbar gradient__bg">
      <div className="navbar__navbar-links">
        <div className="navbar__navbar-links_logo">
          <p className="logo">
            <Link to={"/"}>Flipcart</Link>
          </p>
        </div>
        <div className="navbar__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar__sign">
        <p className="navbar__sign-cart">
          <Link to={"/viewcart"}>
            <span>{cartItemsCount}</span>
            <RiShoppingCartLine color="white" />
          </Link>
        </p>
        <p>Login</p>
        <button>Sign Up</button>
      </div>
      <div className="navbar__menu">
        <div className="navbar__menu-icons">
          {toggle ? (
            <RiCloseLine onClick={() => setToggle(false)} color="white" />
          ) : (
            <RiMenu3Line onClick={() => setToggle(true)} color="white" />
          )}
        </div>
        {toggle && (
          <div className="navbar__menu-container scale-up-center">
            <div className="navabr__menu-container__links">
              <Menu />
              <div className="navbar__menu-container__links-sign">
                <p>Login</p>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navabr;
