import React from "react";
import { Link } from "react-router-dom";
import { NavigationBar } from "../../components/nav.js";
import { HeroSection } from "./hero.js";
import { Assortiment } from "./assortiment.js";
import { ContactInfo } from "./contactinfo.js";
import { OverOns } from "./overons.js";
import { SocialMedia } from "../../components/social_media.js";
import { Footer } from "../../components/footer.js";

export const Home: React.FC = () => {
    return (
        <div>
            <NavigationBar />
            <HeroSection />
            <main>
                <Assortiment />
                <ContactInfo />
                <OverOns />
                <SocialMedia />
            </main>
            <Footer />
        </div>
    );
};
