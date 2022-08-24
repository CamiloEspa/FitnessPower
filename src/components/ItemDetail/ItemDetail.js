import './ItemDetail.scss'

import { useState } from "react"


const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img src={`/assets/${data.image}`} alt="imagen" />
                <div className="context">
                    <h2>title prueba</h2>
                    <h1> {data.titulo} </h1>
                    <p>{data.price}</p>
                </div>

            </div>

        

        </div>
    )

}

export default ItemDetail
