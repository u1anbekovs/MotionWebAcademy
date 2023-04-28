import React from 'react';
import Application from "./application/Application";
import Accordion from "./accordion/Accordion";

const Home = () => {
    return (
        <div>
            <Accordion/>
            <Application/>
        </div>
    );
};

export default Home;