import React from "react";
import { Link } from "react-router-dom";
import { TeamCard } from "../../components/team_card.js";

export const Team: React.FC = () => {
    return (
        <section className="team">
            <h3>Ons team</h3>
            <div className="team-cards">
                <TeamCard img="#" name="Thijs Dessing" title="Eigenaar" />
            </div>
        </section>
    );
};
