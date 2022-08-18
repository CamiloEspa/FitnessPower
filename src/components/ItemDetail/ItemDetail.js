import "../ItemDetail/ItemDetail.scss"
import { useState } from "react"

const ItemDetail = ({data}) => {

    return (
        <div>

            
            <h3>{data.titulo}</h3>
            <p className="">$ {data.price}</p>
            
            <h2>Descripcion Proteina</h2>
            <p>Descripcion de la proteian</p>
        </div>
    )

}

export default ItemDetail
