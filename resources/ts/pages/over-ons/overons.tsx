import React from "react";
import { Link } from "react-router-dom";
import { NavigationBar } from "../../components/nav.js";
import { SocialMedia } from "../../components/social_media.js";
import { Footer } from "../../components/footer.js";
import { Header } from "../../components/header.js";
import type { ButtonType } from "../../components/button.js";
import { Team } from "./team.js";

export const OverOns: React.FC = () => {
    return (
        <div>
            <NavigationBar />
            <Header title="Over ons" subtitle="Ontdek meer over ons" img="/" />
            <main>
                <Team />
                <section className="eigenaar">
                    <div className="eigenaar-img">
                        <img src="#" alt="Thijs Dessing" />
                    </div>
                    <div className="eigenaar-text">
                        <h3>Over de eigenaar</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione voluptates at voluptatibus officia
                            inventore, doloribus delectus eligendi omnis
                            accusamus natus?
                        </p>
                    </div>
                </section>
                <SocialMedia />
            </main>
            <Footer />
        </div>
    );
};
