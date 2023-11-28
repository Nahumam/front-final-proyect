import '../styles/stylishcollection.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

function StylishCollection() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://e-commerce-api-bwhg.onrender.com/api/product')
            .then(response => response.json())
            .then(data => setProductos(data.slice(0, 10)))
            .catch(error => console.error('error', error))
    }, []);

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
                    {productos.map(producto => (
                        <div key={producto.id} className="product-item">
                            <button>
                                <Link to={`/detalle/${producto.id}`}>
                                    <div className='card-contenido'>
                                    <img src={producto.image} alt={producto.name} />
                                    <h3>{producto.name.substring(0,20).concat('...')}</h3>
                                    <p>${producto.price}</p>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default StylishCollection