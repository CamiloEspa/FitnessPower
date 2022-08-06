import ItemProductos from "../ItemProductos/ItemProductos"
const ItemContenedor = ({section}) => {

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProductos titulo="Proteina mass gainer" price={150000} image={'prote1.jpg'} stock={6}/>
            <ItemProductos titulo="Proteina limpia" price={200000} image={'prote2.jpg'} stock={10}/>
        </div>
    )
}

export default ItemContenedor