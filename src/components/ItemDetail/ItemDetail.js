import './ItemDetail.scss'

import { useState } from "react"


const ItemDetail = ({data}) => {
    return (
        <div className="container">
                <h1 className='tituloPosition'> {data.titulo} </h1>
                
                <div className="detail">
                <img className='itemDetailBoxImg' src={`/assets/${data.image}`} alt="imagen" />
                <div className="context">
                <p className='descripcionBox' >{data.descripcion}</p>
                <h4 className='pricePosition'>Precio</h4>
                <p>{data.price} COP</p>

                <button  type="button" className="btn btn-danger botonContador">Comprar</button>
                </div>

            </div>

        

        </div>
    )

}

export default ItemDetail
