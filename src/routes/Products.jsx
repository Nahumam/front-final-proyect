import React from 'react'
import { productos } from './data/data.js'
import Link from 'react-router-dom'

function Products() {

const disponibilidad = () => {
    
    if(productos.disponible === true) {
    return <div>Hay productos disponibles</div>
} else {
    return <div>No hay productos disponibles</div>
}};

    return (
        <>

            <div>
                <Link to={`/product/${productos.id}`}>
                    {productos.name}
                    {productos.image}
                    {disponibilidad}
                </Link>
            </div >

        </>
    )
}

export default Products