import React from "react";

type Categorie = {
    text: string;
};

export const CategorieBanner: React.FC<Categorie> = ({
    text,
}) => {
    return (
        <div className="categorie_banner">
            <h3>{text}</h3>
        </div>
    );
};
