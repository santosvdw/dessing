import React from "react";
import { Link } from "react-router-dom";

export const OverOns: React.FC = () => {
    return (
        <section className="over_ons">
            <div className="over_ons_text">
                <h2>Over ons</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium, alias. Modi, placeat tempore, aliquam hic cumque
                    reiciendis ratione culpa quia officia, laborum eligendi eum?
                    A eum unde quo ut? Ad.
                </p>
                <button>
                    <Link to="/over-ons">Verder lezen</Link>
                </button>
            </div>
            <div className="over_ons_photo">
                <div className="over_ons_photo_overlay"></div>
                <div className="over_ons_photo_img">
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    );
};
