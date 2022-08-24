import { useEffect, useState } from "react"
import products from "../../utils/products"
import ItemList from "../ItemList/ItemList"



const ItemContenedor = ({section}) => {

const [listProducts, setListProducts] = useState ([])

//Test Promesas

    const getProducts = new Promise ((resolve, reject) =>{
            setTimeout ( () =>{
                
            resolve (products)
            }, 2000)
            
        })
        
    useEffect (()=>{

        getProducts.then  ((res)=>{
            setListProducts (res)
        })  
        
        .catch ((error)=>{
            console.log ("La llamada fallo")
        })
        .finally (()=>{
        
        })
    }, [])

    

// Test Promesas FIN

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemContenedor