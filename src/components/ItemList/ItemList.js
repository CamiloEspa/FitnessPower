import ItemProductos from "../ItemProductos/ItemProductos"

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