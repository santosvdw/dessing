import React from "react";

type ImageWithTextProps = {
    src: string; // url van de afbeelding
    text: string; // de tekst onder of naast de afbeelding
};

export const CategoryCard: React.FC<ImageWithTextProps> = ({
    src,
    text,
}) => {
    return (
        <div className="category_card">
            <div className="category_card_image">
                <img src={src} alt={text} />
            </div>
            <p>{text}</p>
        </div>
    );
};
