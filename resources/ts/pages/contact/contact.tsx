import React from "react";


export const Contact: React.FC = () => {
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
