import React from 'react'
import Sofa from '../assets/hero/sofa.jpg'
import Design from '../assets/hero/design.jpg'
import Interior from '../assets/hero/interior.jpg'

function Hero() {
    return (
        <>
            <section className="hero-container">
                <div className="left-hero-container">
                    <h1 className="hero-title">Descubre las Últimas Tendencias En Muebles</h1>
                    <h3 className="hero-subtitle">
                        Compra la última moda en items y mantente a la cabeza del juego de estilos
                    </h3>
                    <button className="explore-more">Explora más</button>
                </div>
                <div className="right-hero-container">
                    <div className="superior-right-container">
                        <div className="hero-images">
                            <div className="new-button"></div>
                            <img src={Design} alt="" />
                        </div>
                        <div className="hero-images">
                            <div className="new-button"></div>
                            <img src={Interior} alt="" />
                        </div>
                    </div>
                    <div className="bottom-right-container">
                        <div className="hero-images">
                            <div className="new-button"></div>
                            <img src={Sofa} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero