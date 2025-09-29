import React from "react";
import { Button } from "./button.js";

import type { ButtonType } from "./button.js";

type Header = {
    title: string; // url van de afbeelding
    subtitle: string; // de tekst onder of naast de afbeelding
    button?: ButtonType;
    img: string;
};

export const Header: React.FC<Header> = ({ title, subtitle, button, img }) => {
    return (
        <header>
            <div className="header-text">
                <h1>{title}</h1>
                <h4>{subtitle}</h4>
                {button ? (
                    <Button text={button.text} href={button.href} />
                ) : null}
            </div>
            <div className="header-img">
                <img src={img} alt={title} />
            </div>
        </header>
    );
};
