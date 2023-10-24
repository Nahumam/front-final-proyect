import { useState } from 'react'

function ProductDetail() {
    return (
        <>
            <section className="product-detail">
                <h2><span className="home">Inicio / Lista de Productos </span>/ <Product /> </h2>
            </section>
        </>
    )
}


function Product() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('https://scratchya.com.ar/react/datos.php')
            .then((response) => {
                return response.json()
            })
            .then((productos) => {
                setProductos(productos)
            })
    }, [])


    return (
        <>

        </>
    )
}



export default ProductDetail
