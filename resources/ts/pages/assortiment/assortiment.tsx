import React from "react";
import { Link } from "react-router-dom";
import { NavigationBar } from "../../components/nav.js";
import { SocialMedia } from "../../components/social_media.js";
import { Footer } from "../../components/footer.js";
import { Header } from "../../components/header.js";
import type { ButtonType } from "../../components/button.js";
import { Categorieen } from "./categorieen.js";

export const Assortiment: React.FC = () => {
    const button:ButtonType = {
        text: "test",
        href: "#"
    };
    return (
        <div>
            <NavigationBar />
            <Header
                title="Ons assortiment" 
                subtitle="Bekijk onze producten"
                img="header.png"
                />
            <main>
                <Categorieen />
            </main>
            <Footer />
        </div>
    );
};
