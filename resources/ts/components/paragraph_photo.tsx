import React, { type ReactElement } from "react";

interface ParagraphAndPhotoProps {
    text: ReactElement;
    href: string;
    alt: string;
}

export const ParagraphAndPhoto: React.FC<ParagraphAndPhotoProps> = ({
    text,
    href,
    alt,
}) => {
    return (
        <div className="paragraph_and_photo">
            <p>{text}</p>
            <img src={href} alt={alt} loading="lazy" />
        </div>
    );
};
