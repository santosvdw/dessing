import React from "react";
import { Link } from "react-router-dom";
import { NavigationBar } from "../../components/nav.js";
import { SocialMedia } from "../../components/social_media.js";
import { Footer } from "../../components/footer.js";
import { Header } from "../../components/header.js";
import type { ButtonType } from "../../components/button.js";
import { Tables } from "./tables.js";
import { Map } from "./map.js";
import { Illustrations } from "../../components/illustrations.js";

export const Contact: React.FC = () => {
    const contact_button: ButtonType = {
        text: "Stuur ons een appje",
        href: "https://api.whatsapp.com/send?phone=31646412379",
    };

    return (
        <>
            <Illustrations />
            <div className="page-content">
                <NavigationBar />
                <Header
                    title="Contact"
                    border={true}
                    subtitle="Heb je een brandende vraag of wil je een bestelling plaatsen?"
                    img="/imgs/contact.webp"
                    button={contact_button}
                />
                <main>
                    <Tables />
                    <Map />
                    <SocialMedia />
                </main>
                <Footer />
            </div>
        </>
    );
};
