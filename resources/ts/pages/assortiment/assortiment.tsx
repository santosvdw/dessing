import React from "react";
import { Link } from "react-router-dom";
import { NavigationBar } from "../../components/nav.js";
import { SocialMedia } from "../../components/social_media.js";
import { Footer } from "../../components/footer.js";
import { Header } from "../../components/header.js";
import { Button, type ButtonType } from "../../components/button.js";
import { Categorieen } from "./categorieen.js";
import { Illustrations } from "../../components/illustrations.js";

export const Assortiment: React.FC = () => {
    const contact_button: ButtonType = {
        text: "Bestel via whatsapp",
        href: "https://api.whatsapp.com/send?phone=31646412379",
    };
    return (
        <>
            <Illustrations />
            <div className="page-content">
                <NavigationBar />
                <Header
                    title="Ons assortiment"
                    subtitle="Van knapperige kibbeling tot huisgemaakte maaltijden — elke dag maken we iets waar je trek van krijgt."
                    img="/imgs/assortiment.webp"
                    border={true}
                    button={contact_button}
                />
                <main>
                    <section className="aanbod-tekst">
                        <h3>Ons aanbod</h3>
                        <p>
                            Bij Vis & Traiteur Dessing draait alles om smaak en
                            kwaliteit. We combineren het beste uit de zee met
                            onze eigen recepten, zodat jij thuis zonder moeite
                            iets heerlijks op tafel zet. Of je nu komt voor een
                            snelle hap, verse vis voor je diner of een complete
                            visschotel voor een feestje — wij regelen het voor
                            je. <br />
                            <br /> Elke dag vind je bij ons iets lekkers:
                            <ul>
                                <li>
                                    <strong>Verse vis</strong> – Dagelijks vers
                                    aangevoerd, direct uit de zee.
                                </li>
                                <li>
                                    <strong>Traiteurmaaltijden</strong> –
                                    Kant-en-klaar, maar altijd met liefde
                                    gemaakt.
                                </li>
                                <li>
                                    <strong>Specialiteiten</strong> – Luxe
                                    hapjes, visschotels en feestelijke
                                    traktaties.
                                </li>
                            </ul>
                            <br />
                            Of je nu één visje wilt bakken of een complete tafel
                            wilt vullen, wij hebben het.
                        </p>
                    </section>
                    <div>
                        <h3>Ons menu</h3> <br />
                        <div className="menu-images">
                            <img
                                src="/imgs/menu2.webp"
                                alt="Menukaart"
                                className="no-border"
                                loading="lazy"
                            />
                            <img
                                src="/imgs/menu1.webp"
                                className="no-border"
                                alt="Menukaart"
                                loading="lazy"
                            />
                        </div>
                        <button>
                            <a
                                href="/imgs/menu.pdf"
                                download="Dessing_Menu.pdf"
                            >
                                Download ons menu
                            </a>
                        </button>
                        {/* <iframe
                            className="aanbod-pdf"
                            width="100%"
                            height="800px"
                            src="/imgs/menu.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            title="PDF Viewer"
                        /> */}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};
