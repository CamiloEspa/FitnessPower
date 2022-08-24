import './NavBar.css'
import {Link} from 'react-router-dom'


const NavBar = () =>{

    return(



<div className= 'navbar bg-light'>
<div className="container">
    <img className='logoTamanio' src="/assets/PowerFitness.png" alt="logo adidas" />
</div>

            <nav className="textoTamanio navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="Home"><a className="espacioBarras nav-link active" aria-current="page">Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/productos"><a className="espacioBarras nav-link">Productos</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacto"><a className="espacioBarras nav-link">Contacto</a></Link>
                </li>
                <li className="nav-item">
                    <a className="espacioBarras nav-link disabled">Disabled</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
        </div>
    )

}

export default NavBar