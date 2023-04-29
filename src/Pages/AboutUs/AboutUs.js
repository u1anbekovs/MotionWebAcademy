import React from 'react';
import HeroAbout from "./heroAbout/HeroAbout";
import Founders from "./founders/Founders";
import License from "./license/License";
import Gallery from "./gallery/Gallery";

const AboutUs = () => {
    return (
        <div>
            <HeroAbout/>
            <Founders/>
            <License/>
            <Gallery/>
        </div>
    );
};

export default AboutUs;