import { useState } from "react";
import { RiMenu3Line, RiCloseLine, RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import LoginModel from "../loginModel/LoginModel";
import { RegisterModel, LoginModel } from "../../components";
import NavItems from "../navItems/NavItems";
import "./navbar.css";

const Navabr = () => {
  const [toggle, setToggle] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginDisplay = () => {
    setShowLoginForm(!showLoginForm);
    setToggle(false);
  };

  const handleRegisterDisplay = () => {
    setShowRegisterForm(!showRegisterForm);
    setToggle(false);
  };

  const cartItemsCount = useSelector(
    (state) => state.cart.shoppingItems.length
  );

  return (
    <div className="nav-container">
      <div id={showLoginForm ? "login-model" : ""} className="model">
        <div className="model_content">
          <LoginModel handleDisplay={handleLoginDisplay} />
        </div>
      </div>
      <div id={showRegisterForm ? "register-model" : ""} className="model">
        <div className="model_content">
          <RegisterModel handleDisplay={handleRegisterDisplay} />
        </div>
      </div>
      <nav className="navbar gradient__bg">
        <div className="navbar__navbar-links">
          <div className="navbar__navbar-links_logo">
            <p className="logo">
              <Link to={"/"}>Mycart</Link>
            </p>
          </div>
          <div className="navbar__navbar-links_container">
            <NavItems />
          </div>
        </div>
        <div className="navbar__sign">
          <p className="navbar__sign-cart">
            <Link to={"/viewcart"}>
              <span>{cartItemsCount}</span>
              <RiShoppingCartLine color="white" />
            </Link>
          </p>
          <p className="navbar__sign_login-btn" onClick={handleLoginDisplay}>
            Login
          </p>
          <button
            className="navbar__sign_signup-btn"
            onClick={handleRegisterDisplay}
          >
            Sign Up
          </button>
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
                <NavItems />
                <div className="navbar__menu-container__links-sign">
                  <p onClick={handleLoginDisplay}>Login</p>
                  <button onClick={handleRegisterDisplay}>Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navabr;
