import './ItemProductos.scss'
import { useState } from 'react'

const ItemProductos = ({titulo, price,image}) =>{

    const [contador, setContador] = useState(1)
    const addNumber = () =>{
        setContador(contador +1)
    }

    const removeNumber = () =>{
        setContador(contador -1)
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

            <p className='card-text text-secondary'>fafdssdkjfnaksjdfkjandfkjndsafnakjnfdkjsanskjnfdsakjnfkjndsajnasdkjnafskjndfsakjadfnskjafdsnkjfdsa</p> <br/>

            <div className='contadorProductos'>
                <button onClick={removeNumber} className='btn btn-danger'>-</button>
                    <p>{contador}</p>
                <button onClick={addNumber} className='btn btn-danger'>+</button>    
            </div>

            <button  type="button" className="btn btn-danger botonContador">Comprar</button>
        </div>
        </div>
        </div>
    </div>


                
    )
}

export default ItemProductos