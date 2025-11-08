import React from "react";
import { Link } from "react-router-dom";

export const OverOns: React.FC = () => {
    return (
        <section className="over_ons">
            <div className="over_ons_text">
                <h2>Over ons</h2>
                <p>
                    Bij Vis & Traiteur Dessing draait het om vakmanschap,
                    kwaliteit en plezier in ons werk. Met een klein, hecht team
                    staan we elke dag klaar om onze klanten iets lekkers mee te
                    geven — van verse vis tot complete maaltijden.
                </p>
                <div>
                    <button>
                        <Link to="/over-ons">Verder lezen</Link>
                    </button>
                </div>
            </div>
            <div className="over_ons_photo">
                <div className="over_ons_photo_overlay"></div>
                <div className="over_ons_photo_img">
                    <img
                        className="no-border"
                        src="/imgs/thijs.webp"
                        alt="Thijs Dessing"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};
