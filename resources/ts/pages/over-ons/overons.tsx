import React from "react";
import { Link } from "react-router-dom";
import { NavigationBar } from "../../components/nav.js";
import { SocialMedia } from "../../components/social_media.js";
import { Footer } from "../../components/footer.js";
import { Header } from "../../components/header.js";
import type { ButtonType } from "../../components/button.js";
import { Team } from "./team.js";
import { ParagraphAndPhoto } from "../../components/paragraph_photo.js";
import { Illustrations } from "../../components/illustrations.js";

export const OverOns: React.FC = () => {
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
                    title="Over ons"
                    border={true}
                    subtitle="Bij Vis & Traiteur Dessing draait het om vakmanschap, kwaliteit en plezier in ons werk."
                    img="/imgs/overons.webp"
                    button={contact_button}
                />
                <main>
                    {/* <Team /> */}
                    <section className="over-ons">
                        <p>
                            <em>
                                Bij Vis & Traiteur Dessing draait het om één
                                ding: goed en lekker eten. We houden van ons
                                vak, en dat proef je terug in alles wat we maken
                                – van de knapperigste kibbeling tot rijkgevulde
                                visschotels en smaakvolle kant en klare
                                maaltijden.
                            </em>{" "}
                            <br />
                            <br />
                        </p>

                        <div className="team">
                            <h3>Wie wij zijn</h3>
                            <ParagraphAndPhoto
                                alt="Thijs Dessing"
                                href="/imgs/thijs_overons.webp"
                                text={
                                    <>
                                        Ik ben Thijs, oprichter en eigenaar van
                                        Vis & Traiteur Dessing. Eten speelt al
                                        van jongs af aan een grote rol in mijn
                                        leven. Ik ben altijd bezig geweest met
                                        proeven, koken en nieuwe smaken
                                        ontdekken. Die liefde voor goed eten
                                        heeft er uiteindelijk voor gezorgd dat
                                        ik mijn eigen zaak ben begonnen. <br />{" "}
                                        <br /> Met Dessing wil ik meer doen dan
                                        alleen vis verkopen. Ik wil mensen laten
                                        ervaren hoe lekker verse producten
                                        kunnen zijn, en hoe makkelijk je daar
                                        thuis iets bijzonders mee maakt. Samen
                                        met mijn team zorg ik ervoor dat er elke
                                        dag iets moois in de toonbank ligt en
                                        dat iedereen met een goed gevoel (en
                                        hopelijk trek in meer) de deur uitgaat.{" "}
                                        <br />
                                        <br />
                                    </>
                                }
                            />
                        </div>

                        <div className="belangrijk">
                            <h3>Wat wij belangrijk vinden</h3>
                            <p>
                                <ul>
                                    <li>
                                        <strong>Vers & eerlijk</strong> – We
                                        werken zoveel mogelijk met dagverse
                                        aanvoer en kiezen bewust voor kwaliteit.
                                    </li>
                                    <li>
                                        <strong>Ambacht</strong> – Alles wat
                                        kan, maken we zelf. Van sauzen en
                                        salades tot complete maaltijden.
                                    </li>
                                    <li>
                                        <strong>Persoonlijk</strong> – We kennen
                                        onze klanten en helpen je graag met
                                        advies, inspiratie of een goed recept.
                                    </li>
                                </ul>{" "}
                                <br />
                                <br />
                            </p>
                        </div>

                        <div className="ons-doel">
                            <h3>Ons doel</h3>
                            <p>
                                Of je nu binnenloopt voor een snelle lunch, een
                                stuk zalm voor op de barbecue of een feestelijke
                                visschotel: wij willen dat je met een glimlach
                                de deur uitgaat. Geen ingewikkeld gedoe, gewoon
                                lekker eten waar we zelf achter staan.
                            </p>
                        </div>
                    </section>
                    <SocialMedia />
                </main>
                <Footer />
            </div>
        </>
    );
};
