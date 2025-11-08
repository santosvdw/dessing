import React from "react";

export const Map: React.FC = () => {
    return (
        <div className="map">
            <h5>Locatie</h5>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.087699407401!2d5.05476!3d52.658393499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c8a90062d881f7%3A0x5eb1a183eff85f92!2sDessing!5e0!3m2!1sen!2snl!4v1759820820472!5m2!1sen!2snl"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};
