import React from "react";
import { Link } from "react-router-dom";

export const HeroSection: React.FC = () => {
  return (
    <header>
        <div className="header-text">
            <h1>Dessing <br />Vis & Traiteur</h1>
            <p className="semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eos tempora, error accusantium quos laudantium!</p>
            <button><Link to="/assortiment">Bekijk ons aanbod</Link></button>
        </div>
        <div className="header-image">
            <img src="/header.png" loading="lazy" alt="" />
        </div>
    </header>
  );
};