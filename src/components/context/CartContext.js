import { createContext, useState } from "react";

const CartContext = createContext ()

const CartProvider = ({children}) =>{

    const [cartProducts, setCartProducts] = useState([])

    const addProductToCard = (product) =>{
        setCartProducts(cartProducts=> [...cartProducts, product])
    }
    
    const data = {
    
        cartProducts,
        setCartProducts,
        addProductToCard
    }

    return (

        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )

}

export default CartProvider

export {CartContext}