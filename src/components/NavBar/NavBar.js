import './NavBar.css'

const NavBar = () =>{

    return(



<div className= 'navbar bg-light'>
<div className="container">
    <a className="navbar-brand" href="#">
    <img className='logoTamanio' src="/assets/PowerFitness.png" alt="logo adidas" />
    </a>
</div>

            <nav className="textoTamanio navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
        </div>
    )

}

export default NavBar