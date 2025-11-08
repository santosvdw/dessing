import React from "react";
import { Link } from "react-router-dom";

export const Tables: React.FC = () => {
    return (
        <section className="contact_tables">
            <table>
                <thead>
                    <h5>Contactgegevens</h5>
                </thead>
                <tbody>
                    <tr>
                        <td>Telefoonnummer</td>
                        <td>
                            <a href="tel:+31612345678">+31646412379</a>
                            <br />
                            <span className="small-text">
                                *Alleen bereikbaar via whatsapp.
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>Emailadres</td>
                        <td>
                            <a href="mailto:info@vistraiteurdessing.nl">
                                info@vistraiteurdessing.nl
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Adres</td>
                        <td>De Huesmolen 74, 1625 HZ, Hoorn</td>
                    </tr>
                    <tr>
                        <td>Openingstijden</td>
                        <td>
                            Dinsdag t/m vrijdag: 09:00 – 18:00 <br />
                            Zaterdag: 09:00 – 17:00
                        </td>
                    </tr>
                    <tr>
                        <td>Kvk-nummer</td>
                        <td>97129186</td>
                    </tr>
                </tbody>
            </table>

            <table>
                <thead>
                    <h5>Sociale Media</h5>
                </thead>
                <tbody>
                    <tr>
                        <td>Instagram</td>
                        <td>
                            <a href="https://www.instagram.com/vistraiteurdessing/">
                                @vistraiteurdessing
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Facebook</td>
                        <td>
                            <a href="https://www.facebook.com/profile.php?id=61583418304061">
                                Vis & Traiteur Dessing
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};
