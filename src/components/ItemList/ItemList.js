import ItemProductos from "../ItemProductos/ItemProductos"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const ItemList = ({dataProducts}) => {
    
    return (
        <>
        {dataProducts.map (product=> { 
            return <ItemProductos key={product.id} data={product}/> 
        })}
        </>
    )
}

export default ItemList