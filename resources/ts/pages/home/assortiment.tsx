import React from "react";
import { Link } from "react-router-dom";
import { CategoryCard } from "../../components/category_card.js";

export const Assortiment: React.FC = () => {
  return (
    <section className="assortiment">
        <h3>Ons assortiment</h3>
        <div className="assortiment-content">
            <div className="assortiment-overlay" id="right"></div>
            <div className="assortiment-overlay" id="left"></div>
            <div className="assortiment-cards">
                <CategoryCard
                    src="/imgs/"
                    text="Gebakken vis"
                />
            </div>
        </div>
        <button>
            <Link to="/">Meer bekijken</Link>
        </button>
    </section>
  );
};