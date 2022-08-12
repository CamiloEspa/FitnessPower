import { useEffect, useState } from "react"
import ItemProductos from "../ItemProductos/ItemProductos"
import products from "../../utils/products"


const ItemContenedor = ({section}) => {

        const product1= {
            titulo: "Proteina",
            price: 150000,
            image: 'prote1.jpg',
            stock: 5
        }

        const product2= {
            titulo: "Proteina MassGainer",
            price: 250000,
            image: 'prote2.jpg',
            stock: 10
        } 

        const [listProducts, setListProducts] = useState ([])

//Test Promesas

    const getProducts = new Promise ((resolve, reject) =>{
            resolve (products)
        })
        
    getProducts.then  ((res)=>{
        //console.log ("Productos:",res)
        setListProducts (res)
    })  
    
    .catch ((error)=>{
        console.log ("La llamada fallo")
    })
    .finally (()=>{
    
    })

// Test Promesas FIN

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            {listProducts.map (product=> <ItemProductos data={product}/> )}
            

        </div>
    )
}

export default ItemContenedor