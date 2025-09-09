import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer_logo">
                <h5>Dessing</h5>
            </div>
            <div className="footer_text">
                <h4>Pagina's</h4>
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
                <h4>Contactinformatie</h4>
                <ul>
                    <li>Telefoonnummer: <a href="tel:+31612345678">+31612345678</a></li>
                    <li>Emailadres: <a href="mailto:info@vistraiteurdessing.nl">info@vistraiteurdessing.nl</a></li>
                    <li>Adres: Adres 12, 1234 AB, Hoorn</li>
                    <li>Openingstijden: Zo & Ma gesloten | Di-Za 12:00-19:00</li>
                    <br />
                    <li>Kvk-nummer: 1234567890</li>
                    <li>Btw-nummer: 1234567890</li>
                </ul>
            </div>
            <div className="footer_text">
                <h4>Social Media</h4>
                <ul>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
};
