
import Hero from '../components/Hero'
import Collection from '../components/StylishCollection'


function Home() {
    return <>
        <div className="hero">
            <Hero />
        </div>

        <div className="stylish-collection">
            <Collection />
        </div>

    </>;
}

export default Home;
