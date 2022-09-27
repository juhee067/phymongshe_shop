import React, { useEffect, useState } from "react";
import TopBanner from "./TopBanner";
import MainNav from "./MainNav";
import "../css/Header.scss";
import { FiUserPlus, FiShoppingCart, FiSearch } from "react-icons/fi";

const Header = () => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const scrollEvent = () => {
      let sct = window.scrollY;

      sct > 0 ? setOn(true) : setOn(false);
    };
    return () => {
      window.addEventListener("scroll", scrollEvent);
    };
  }, []);
  return (
    <header className={`Header {on?'on':""}`}>
      <TopBanner />
      <div className="gnb">
        <h1>
          <a href="/">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/top_logo.png"}
              alt=""
            />
          </a>
        </h1>
        <nav className="inner">
          <MainNav />
        </nav>
        <div className="rt">
          <li>
            <FiUserPlus />
          </li>
          <li>
            {" "}
            <FiShoppingCart />
            <span>0</span>
          </li>
          <li>
            {" "}
            <FiSearch />
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;
