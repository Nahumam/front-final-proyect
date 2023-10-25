import React from 'react'
import { productos } from './data/data.js'
import Link from 'react-router-dom'

function Products() {
    return (
        <>

            <div>
                <Link to={`/product/${productos.id}`}>
                    {productos.name}
                    {productos.image}
                </Link>
            </div >

        </>
    )
}

export default Products