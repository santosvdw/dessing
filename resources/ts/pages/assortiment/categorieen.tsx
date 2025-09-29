import React from "react";
import { Link } from "react-router-dom";
import { CategorieBanner } from "./categorie_banner.js";
import { ProductCard } from "../../components/product_card.js";

export const Categorieen: React.FC = () => {
  return (
    <section className="producten">
        <div className="categorie-01">
            <CategorieBanner text="Gefrituurd" />
            <div className="producten_cards">
                <ProductCard 
                    name="Kibbeling"
                    desc="Lorem ipsum dolor sit amet amadeus"
                    price="&euro;12,5"
                    img="/"
                />
            </div>
        </div>
    </section>
  );
};