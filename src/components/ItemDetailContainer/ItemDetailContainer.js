import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react"
import products from "../../utils/products";
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () =>{
    const [productData, setProductData] = useState({})

    const {id} = useParams ()

    useEffect (()=>{
        filetById()
    },[id])
    
    const filetById = () =>{
        products.some ((product)  =>{
            if (products.id == id){
                console.log ("producto filtrado ", products)
                setProductData(products)
            }
        })
    }

    /* useEffect (() =>{
        const getData = new Promise (resolve =>{
            setTimeout (() =>{
                resolve (products);
            },2000);
        });
        
        getData.then (res =>setProductData(res));
    },[]) */

    return(
        
        <div>
            <div className="container">
            <ItemDetail data={productData}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer