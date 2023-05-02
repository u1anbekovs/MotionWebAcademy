import React from 'react';
import HeroClub from "./heroClub/HeroClub";
import Talking from "./talking/Talking";
import Team from "./team/Team";
import Get from "./get/Get";

const Club = () => {
    return (
        <div>
            <HeroClub/>
            <Talking/>
            <Team/>
            <Get/>
        </div>
    );
};

export default Club;