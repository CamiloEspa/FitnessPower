import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

import { useState } from "react"


const ItemDetail = ({data}) => {

const [quantitySelected, setQuantitySelected] = useState (0)

    return (
        <div className="container">
                <h1 className='tituloPosition'> {data.titulo} </h1>
                
                <div className="detail">
                <img className='itemDetailBoxImg' src={`/assets/${data.image}`} alt="imagen" />
                <div className="context">
                <p className='descripcionBox' >{data.descripcion}</p>
                <h4 className='pricePosition'>Precio</h4>
                <p>{data.price} COP</p>

                {console.log("setQuantitySelected", quantitySelected)}{
                    quantitySelected > 0 ? 
                    
                    <Link to='/cart'><button className='btn btn-danger'> Terminar Compra </button></Link>
                    
                    : <ItemCount setQuantitySelected={setQuantitySelected} productData={data} />
                }

                </div>

            </div>

        

        </div>
    )

}

export default ItemDetail
