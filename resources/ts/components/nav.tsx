import React from "react";
import { Link } from "react-router-dom";

export const NavigationBar: React.FC = () => {
  return (
    <nav>
        <div className="logo"><h5>Dessing</h5></div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/assortiment">Assortiment</Link>
            <Link to="/over-ons">Over ons</Link>
            <Link to="Contact">Contact</Link>
        </div>
    </nav>
  );
};