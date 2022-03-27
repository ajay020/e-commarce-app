import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

import "./NavItems.css";
import { useDispatch } from "react-redux";
import { setProductSearchQuery } from "../../redux/product/productActions";

const NavItems = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  console.log("Navitems");
  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  if (searchText === "") {
    dispatch(setProductSearchQuery(searchText));
  }

  const setSearchQuery = () => {
    if (searchText) {
      dispatch(setProductSearchQuery(searchText));
      //   setSearchText("");
      //   console.log("cleared");
    }
  };

  return (
    <>
      <p>
        <a href="/">Home</a>
      </p>
      <p>
        <a href="/contact">Contact</a>
      </p>
      <p>
        <a href="/about">About</a>
      </p>
      <div className="searchContainer">
        <input
          onChange={onChangeHandler}
          className="searchInput"
          type="text"
          placeholder="Search..."
          value={searchText}
        />
        <RiSearch2Line
          onClick={setSearchQuery}
          className="searchIcon"
          size={"42"}
        />
      </div>
    </>
  );
};

export default NavItems;
