import React from "react";
import { Button } from "./button.js";

import type { ButtonType } from "./button.js";

type Header = {
    title: string | React.ReactNode; // url van de afbeelding
    subtitle: string; // de tekst onder of naast de afbeelding
    button?: ButtonType;
    img: string;
    border?: boolean;
};

export const Header: React.FC<Header> = ({ title, subtitle, button, img, border }) => {
    return (
        <header>
            <div className="header-text">
                <h1>{title}</h1>
                <p className="semibold">{subtitle}</p>
                {button ? (
                    <Button text={button.text} href={button.href} />
                ) : null}
            </div>
            <div className="header-img">
                <img className={border ? "" : "no-border"} src={img} alt={title ? title.toString() : "Header image"} loading="lazy" />
            </div>
        </header>
    );
};
