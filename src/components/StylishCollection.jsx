import '../styles/stylishcollection.css'
import { Link } from 'react-router-dom'

function StylishCollection() {
    return (
        <>
            <section className="collection">
                <h1 className="collection-title">
                    Elegante Colección de Muebles
                </h1>
                <p>Mantente informado con nuestras publicaciones en el blog sobre muebles modernos y de moda en la industria</p>
                <div className="collection-buttons">
                    <button> <Link> Todos los Muebles </Link></button> 
                    <button><Link>Dormitorio</Link> </button>
                    <button> <Link>Sala de Estar</Link></button>
                    <button><Link>Oficina en Casa</Link></button>
                    <button><Link>Comedor</Link></button>
                    <button><Link>Más</Link></button>
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