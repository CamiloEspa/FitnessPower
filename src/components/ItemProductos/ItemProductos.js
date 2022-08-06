import './ItemProductos.scss'
import { useState } from 'react'




const ItemProductos = ({titulo, price,image, stock}) =>{

    const [contador, setCount] = useState( 0 )
    const addNumber = () =>{
        setCount(contador +1)

            
    }

    const removeNumber = () =>{
        setCount(contador -1)
    }

    return(
        <div className='container '>
        <div className='row tamanioCard '>
        <div className='card'>
        <img className='card-img-top' src={`/assets/${image}`} alt="Imagen producto" />
        <div className='card-body'>
            <h4 className='card-title'> {titulo}</h4>
            
            <br/>
            <spam>COP {price}</spam> <br/>
            <br/>
            <p>Stock {stock}</p>

            <p className='card-text text-secondary'>fafdssdkjfnaksjdfkjandfkjndsafnakjnfdkjsanskjnfdsakjnfkjndsajnasdkjnafskjndfsakjadfnskjafdsnkjfdsa</p> <br/>

            <div className='contadorProductos'>
                <button disabled={contador<=1} onClick={removeNumber} className='btn btn-danger'>-</button>
                    <p>{contador}</p>
                <button disabled={contador>=stock} onClick={addNumber} className='btn btn-danger'>+</button>    
            </div>

            <button  type="button" className="btn btn-danger botonContador">Comprar</button>
        </div>
        </div>
        </div>
    </div>


                
    )
}

export default ItemProductos