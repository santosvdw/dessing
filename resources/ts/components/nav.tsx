import React from "react";
import { Link } from "react-router-dom";

export const NavigationBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-logo">
                <img
                    loading="lazy"
                    className="no-border logo"
                    src="/imgs/dessing_logo_blue.webp"
                    alt="Dessing"
                />
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/assortiment">Assortiment</Link>
                <Link to="/over-ons">Over ons</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};
