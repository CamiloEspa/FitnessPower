import './ItemProductos.scss'

const ItemProductos = (props) =>{
    console.log ("propiedades: ",props.title, props.price )
    return(
        <div className='estilosCards'>
            <div className='float-options'> 
            <img src="./assets/FotosProteinas/prote1.jpg" alt="Proteina"/>
            <br/> 
            <p>{props.titulo}</p>
            <spam>COP {props.price}</spam>
            <br/>
            <button>Comprar </button>
        </div>
        </div>
    )
}

export default ItemProductos