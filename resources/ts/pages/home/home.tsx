import React from "react";
import { Link } from "react-router-dom";
import { NavigationBar } from "../../components/nav.js";
import { HeroSection } from "./hero.js";
import { Assortiment } from "./assortiment.js";
import { ContactInfo } from "./contactinfo.js";
import { OverOns } from "./overons.js";
import { SocialMedia } from "../../components/social_media.js";
import { Footer } from "../../components/footer.js";

import type { ButtonType } from "../../components/button.js";
import { Header } from "../../components/header.js";
import { Illustrations } from "../../components/illustrations.js";

export const Home: React.FC = () => {
    const home_button: ButtonType = {
        text: "Ontdek ons aanbod",
        href: "/assortiment",
    };

    return (
        <>
            <Illustrations />
            <div className="page-content">
                <NavigationBar />
                <Header
                    title={<>Dessing<br />Vis & Traiteur</>}
                    subtitle="Waar kwaliteit, smaak en gastvrijheid samenkomen."
                    img="/header.png"
                    button={home_button}
                    border={false}
                    />
                <main>
                    <Assortiment />
                    <ContactInfo />
                    <OverOns />
                    <SocialMedia />
                </main>
                <Footer />
            </div>
        </>
    );
};
