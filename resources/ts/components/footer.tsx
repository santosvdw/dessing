import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="content">
                <div className="footer_logo">
                    <img
                        className="no-border logo"
                        src="/imgs/dessing_logo_white.webp"
                        alt="Dessing"
                        loading="lazy"
                    />
                </div>
                <div className="links">
                    <div className="footer_text">
                        <h6>Pagina's</h6>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/assortiment">Assortiment</Link>
                            </li>
                            <li>
                                <Link to="/over-ons">Over ons</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_text">
                        <h6>Contactinformatie</h6>
                        <ul>
                            <li>
                                Telefoonnummer:{" "}
                                <a href="tel:+31612345678">+31646412379</a>
                                <br />
                                <span className="small-text">
                                    *Alleen bereikbaar via whatsapp.
                                </span>
                            </li>
                            <li>
                                Emailadres:{" "}
                                <a href="mailto:info@vistraiteurdessing.nl">
                                    info@vistraiteurdessing.nl
                                </a>
                            </li>
                            <li>Adres: De Huesmolen 74, 1625 HZ, Hoorn</li>
                            <li>
                                Openingstijden: <br />
                                Dinsdag t/m vrijdag: 09:00 – 18:00 <br />
                                Zaterdag: 09:00 – 17:00
                            </li>
                            <br />
                            <li>Kvk-nummer: 97129186</li>
                        </ul>
                    </div>
                    <div className="footer_text">
                        <h6>Social Media</h6>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/vistraiteurdessing/#">
                                    Instagram (@vistraiteurdessing)
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=61583418304061">
                                    Facebook (Vis & Traiteur Dessing)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="credits">
                <div className="gradient-balk"></div>
                <p id="webverde">
                    Deze website is gemaakt door{" "}
                    <a href="https://webverde.nl">Web Verde</a>.
                </p>
            </div>
        </footer>
    );
};
