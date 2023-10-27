import React from 'react';
import { productos } from '../data/data.js';
import { Link } from 'react-router-dom';

function Products() {
    const disponibilidad = (producto) => {
        if (producto.disponible) {
            return <div>Hay productos disponibles</div>;
        } else {
            return <div>No hay productos disponibles</div>;
        }
    };

    return (
        <>
            {productos.map((producto) => (
                <div key={producto.id}>
                    <Link to={`/product/${producto.id}`}>
                        <div>{producto.name}</div>
                        <img src={producto.image} alt={producto.name} />
                        {disponibilidad(producto)}
                    </Link>
                </div>
            ))}
        </>
    );
}

export default Products;
