import React from "react";

export type ButtonType = {
    text: string;
    href: string;
};

export const Button: React.FC<ButtonType> = ({
    href,
    text,
}) => {
    return (
        <button>
            <a href={href}>{text}</a>
        </button>
    );
};
