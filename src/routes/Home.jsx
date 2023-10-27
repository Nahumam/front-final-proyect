import React from 'react';
import Hero from '../components/Hero.jsx'
import Collection from '../components/StylishCollection.jsx'
import Navbar from '../components/Navbar.jsx';


function Home() {
    return <>
        <Navbar/>
        <div className="hero">
            <Hero />
        </div>

        <div className="stylish-collection">
            <Collection />
        </div>

    </>;
}

export default Home;
