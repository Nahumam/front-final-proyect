import '../styles/stylishcollection.css'

function StylishCollection() {
    return (
        <>
            <section className="collection">
                <h1 className="collection-title">
                    Elegante Colección de Muebles
                </h1>
                <p>Mantente informado con nuestras publicaciones en el blog sobre muebles modernos y de moda en la industria</p>
                <div className="collection-buttons">
                    <button>Todos los Muebles</button>
                    <button>Dormitorio</button>
                    <button>Sala de Estar</button>
                    <button>Oficina en Casa</button>
                    <button>Comedor</button>
                    <button>Más</button>
                </div>
                <div className="collection-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        </>
    )
}

export default StylishCollection