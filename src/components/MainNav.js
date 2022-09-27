import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <ul>
      <li>
        <Link to="/">BRAND</Link>
        <Link to="/">SHOPPING</Link>
        <Link to="/">EVENT</Link>
        <Link to="/">COMMUNITY</Link>
        <Link to="/">CS CENTER</Link>
      </li>
    </ul>
  );
};

export default MainNav;
