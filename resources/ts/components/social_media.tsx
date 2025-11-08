import React from "react";
import { Link } from "react-router-dom";

export const SocialMedia: React.FC = () => {
    return (
        <section className="social_media">
            <h5>Blijf op de hoogte!</h5>
            <h3>
                Volg ons op
                <br />
                social media!
            </h3>
            <div className="social_media_buttons">
                <button>
                    <a href="https://www.instagram.com/vistraiteurdessing/#">Instagram</a>
                </button>
                <button>
                    <a href="https://www.facebook.com/profile.php?id=61583418304061">Facebook</a>
                </button>
            </div>
        </section>
    );
};
