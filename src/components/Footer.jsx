
import '../styles/footer.css'

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="suscribe">
                    <div className="logo-footer">
                        <img src="" alt="" />
                    </div>
                    <p className='join'></p>
                    <input type="email" name="enter-email" id="enter-email" placeholder='Ingresa tu Email' />
                    <button type="submit" value="SUSCRIBETE">Suscribete</button>
                    <p className="privacy-policy"></p>
                </div>
                <div className="about-us"></div>
                <div className="follow-us"></div>
            </section>
        </>
    )
}

export default Footer