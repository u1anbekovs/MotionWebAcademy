import React from 'react';
import HeroClub from "./heroClub/HeroClub";
import Talking from "./talking/Talking";
import Team from "./team/Team";

const Club = () => {
    return (
        <div>
            <HeroClub/>
            <Talking/>
            <Team/>
        </div>
    );
};

export default Club;