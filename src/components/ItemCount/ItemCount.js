import { Button } from "bootstrap"
import './ItemCount.scss'
import { useState } from "react"


const ItemCount =({setQuantitySelected}) =>{

    const [countQuantity, setCountQuantity ] = useState (1)
    
    const addQuantity = () =>{
        setCountQuantity (countQuantity + 1)

    }

    const removeQuantity = () =>{
        setCountQuantity (countQuantity - 1)
    }

const onAdd = () =>{
    setQuantitySelected(countQuantity)

}

    return(

        <>
        <div className="contadorProductos">
            <button className="btn btn-danger" onClick={removeQuantity} disabled={countQuantity<=1}>-</button>
            <span>{countQuantity}</span>
            <button className="btn btn-danger" onClick={addQuantity} /* disabled={countQuantity>=stock} */>+</button>
        </div>
        <button className="btn btn-danger botonContador" onClick={onAdd}> Agregar al carrito</button>
        </>
    )

}

export default ItemCount