import './headerMobile.css';
import './headerTablet.css';
import './headerDesktop.css';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

    const location = useLocation();

    useEffect(() => {
        const isHomePage = location.pathname === '/';
        const headerClass = isHomePage ? 'mainHome' : 'not-main-Home';

        // Agrega o quita la clase según si estás en la ruta '/' o no
        document.querySelector('header').classList.add(headerClass);

        return () => {
        // Limpia la clase cuando el componente se desmonta
        document.querySelector('header').classList.remove('mainHome', 'not-main-Home');
    };
  }, [location.pathname]);

    return (
        <header>
            <div className="header-wrapper">
                <div className="header-logo"><a href="/"><img src="/assets/streamixLogo.svg" alt="logo"/></a></div>
                <div className="header-branding">
                    <h1 className="header-brand">STREAMIX</h1>
                    <h2 className="header-heading">Todo para tus streams!</h2>
                </div>
            </div>
        <div className="header-wrapper2">
            <form action="/" method="get" className="search-bar">
                <fieldset className="input-field">
                    <div class="search-btn" type="submit"><span className="material-icons">search</span></div>
                    <input type="text" name="search"/>
                </fieldset>
            </form>
            <div className="collapsible nav-menu">
                <div className="menu-btn-wrapper">
                    <div className="collapsible-header nav-btn">
                        <a id="hideNavs" href="#hideNavs" className="collapse-start"><span className="material-icons">menu</span></a>
                        <a id="showNavs" href="#showNavs" className="collapsed"><span className="material-icons">menu_open</span></a>
                    </div>
                </div>
                <nav className="collapsible-body nav-body">
                    <a href="">Nosotros</a>
                    <a href="">Contáctanos</a>
                </nav>
                <nav class="collapsible-body nav-body2">
                    <a href="/products">Productos</a>
                    <a href=""><span className="material-icons">shopping_cart</span>Carrito</a>
                    <a href="/login"><span className="material-icons">account_circle</span>Entra</a>
                </nav> 
            </div>            
        </div>
        </header>
    );
};

export default Header;