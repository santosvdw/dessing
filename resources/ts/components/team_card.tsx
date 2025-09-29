import React from "react";

type TeamCard = {
    img: string;
    name: string;
    title: string;
};

export const TeamCard: React.FC<TeamCard> = ({ img, name, title }) => {
    return (
        <div className="team_card">
            <div className="team_card_image">
                <img src={img} alt={name} />
            </div>
            <div className="team_card_text">
                <h5>{name}</h5>
                <p>{title}</p>
            </div>
        </div>
    );
};
