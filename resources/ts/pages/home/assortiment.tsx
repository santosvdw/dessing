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
                    <div className="cards-wrapper">
                        <CategoryCard
                            src="/imgs/gebakken_vis.webp"
                            text="Gebakken vis"
                        />
                        <CategoryCard
                            src="/imgs/gerookte_vis.webp"
                            text="Gerookte vis"
                        />
                        <CategoryCard
                            src="/imgs/maaltijden_hapjes.webp"
                            text="Maaltijden/hapjes"
                        />
                        <CategoryCard
                            src="/imgs/salades.webp"
                            text="Salades"
                        />
                        <CategoryCard
                            src="/imgs/verse_vis.webp"
                            text="Verse vis"
                        />
                        <CategoryCard
                            src="/imgs/gebakken_vis.webp"
                            text="Gebakken vis"
                        />
                        <CategoryCard
                            src="/imgs/gerookte_vis.webp"
                            text="Gerookte vis"
                        />
                        <CategoryCard
                            src="/imgs/maaltijden_hapjes.webp"
                            text="Maaltijden/hapjes"
                        />
                        <CategoryCard
                            src="/imgs/salades.webp"
                            text="Salades"
                        />
                        <CategoryCard
                            src="/imgs/verse_vis.webp"
                            text="Verse vis"
                        />
                    </div>
                </div>
            </div>
            <div>
                <button>
                    <Link to="/assortiment">Meer bekijken</Link>
                </button>
            </div>
        </section>
    );
};
