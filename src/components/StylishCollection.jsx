import '../styles/stylishcollection.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

function StylishCollection() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://e-commerce-api-bwhg.onrender.com/api/product')
            .then(response => response.json())
            .then(data => setProductos(data.slice(0, 8)))
            .catch(error => console.error('error', error))
    }, []);

    return (
        <>
            <section className="collection">
                <h1 className="collection-title">
                    Elegante Colección de Muebles
                </h1>
                <p>Mantente informado con nuestras publicaciones en el blog sobre muebles modernos y de moda en la industria</p>
                <div className="collection-grid">
                    {productos.map(producto => (
                        <div key={producto._id} className="product-item">
                            <button>
                                <Link to={`/detalle/${producto._id}`}>
                                    <img src={producto.image} alt={producto.name} />
                                    <h3>{producto.name}</h3>
                                    <p>${producto.price}</p>
                                </Link>
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default StylishCollection;
