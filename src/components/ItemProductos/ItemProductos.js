import './ItemProductos.scss'

const ItemProductos = ({titulo, price,imagen}) =>{
    return(
        <div className='container '>
        <div className='row tamanioCard '>
        <div className='card '>
        <img className='card-img-top' src={"./assets/FotodProteinas/ ${imagen}"} alt="imagen"/>
        <div className='card-body'>
            <h4 className='card-title'> {titulo}</h4>
            <br/>
            <spam>COP {price}</spam> <br/>
            <br/>
            <p className='card-text text-secondary'>fafdssdkjfnaksjdfkjandfkjndsafnakjnfdkjsanskjnfdsakjnfkjndsajnasdkjnafskjndfsakjadfnskjafdsnkjfdsa</p>
        </div>
        </div>
        </div>
    </div>


                
    )
}

export default ItemProductos