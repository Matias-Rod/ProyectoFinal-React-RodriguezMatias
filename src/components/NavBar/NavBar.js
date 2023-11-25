import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg bg">
    <div className="container-fluid">
        <Link className="navbar-brand w-25" to="/"><img src={Logo} className='w-50' alt="Logo de la tienda" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center align-items-center mx-5" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item mx-3 fs-5">
                    <Link className="nav-link text-white" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item mx-3 fs-5">
                    <Link className="nav-link text-white" to="/category/guitarras">Guitarras</Link>
                </li>
                <li className="nav-item mx-3 fs-5">
                    <Link className="nav-link text-white" to="/category/bajos">Bajos</Link>
                </li>
                <li className="nav-item mx-3 fs-5">
                    <Link className="nav-link text-white" to="/category/teclados">Teclados</Link>
                </li>
            </ul>
        </div>
            <div>
                <Link to="/cart"><button className='border-none rounded'><CartWidget/></button></Link>
            </div>
    </div>
</nav>
  )
}

export default NavBar