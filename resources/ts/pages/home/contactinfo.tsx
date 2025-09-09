import React from "react";
import { Link } from "react-router-dom";

export const ContactInfo: React.FC = () => {
    return (
        <section className="contact_info">
            <div className="contact_info_openingstijden">
                <div className="contact_info_titel">
                    <img src="/icons/clock.svg" alt="Clock" />
                    <h6>Openingstijden</h6>
                </div>
                <div className="contact_info_tekst">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque mollitia, facilis architecto earum nostrum quas nobis
                    minus eaque unde ducimus vero voluptatibus dolores iure
                    temporibus.
                </div>
            </div>
            <div className="contact_info_locatie">
                <div className="contact_info_titel">
                    <img src="/icons/location.svg" alt="Location" />
                    <h6>Locatie</h6>
                </div>
                <div className="contact_info_tekst">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque mollitia, facilis architecto earum nostrum quas nobis
                    minus eaque unde ducimus vero voluptatibus dolores iure
                    temporibus.
                </div>
            </div>
            <div className="contact_info_contactinformatie">
                <div className="contact_info_titel">
                    <img src="/icons/phone.svg" alt="Phone" />
                    <h6>Contactinfomatie</h6>
                </div>
                <div className="contact_info_tekst">
                    <p><ul>
                        <li>Telefoonnummer: <a href="tel:+31612345678">+31612345678</a></li>
                        <li>Emailadres:<a href="mailto:info@vistraiteurdessing.nl">info@vistraiteurdessing.nl</a></li>
                    </ul></p>
                </div>
            </div>
        </section>
    );
};
