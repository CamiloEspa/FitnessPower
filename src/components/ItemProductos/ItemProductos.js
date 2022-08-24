
import './ItemProductos.scss'
import {   useState, useEffect } from 'react'
import {Link} from 'react-router-dom'




const ItemProductos = ({data}) =>{

    const {titulo, price, image, stock, id} = data

    const [contador, setCount] = useState( 0 )
    const addNumber = () =>{
        setCount(contador +1)            
    }


    useEffect (()=>{
        console.log ("Se esta ejecutando el useEffects")
        /*   fetch ().then (
                setProduct()
            ) */
        })


    const removeNumber = () =>{
        setCount(contador -1)
    }


    return (

        <Link to={`/productos/${id}`}>

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
    </Link>


                
    )
}

export default ItemProductos