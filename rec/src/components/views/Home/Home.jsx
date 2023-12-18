import './indexMobile.css';
import './indexTablet.css';
import './indexDesktop.css';
import React, { useContext } from 'react';
import { MyContext } from '../../../context/MyProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import { typing } from '../../../helpers/typing';

const Home = () => {

    const isLogin = useContext(MyContext);
    const Navigate = useNavigate();
    const type = typing();


    return (
        <main className="mainHome bg-image" id="homeMain" onLoad={type}>
            <section className="mainHome" id="intro">
                <div className="heading-content">
                    <h4 className="heading-tittle">Enriquece tu contenido con</h4>
                    <span className="typing-effect" id="typing-effect">Dispositivos que faciliten tu transmisión</span>
                    <figure>
                        <div className="image-loop"></div>
                    </figure>
                </div>
            </section>
            <section className="mainHome categories" id="cat1">
                <div className="cat-content">
                    <h4 className="cat-tittle">Dispositivos y herramientas</h4>
                    <span className="cat-description">Encuentra todo lo necesario para hacer tu transmisión en alta calidad de video y sonido, con baja latencia. Cámaras, micrófonos, capturadoras y más...</span>
                    <figure>
                        <img className="cat-image" src="/assets/devices.jpg" alt="Devices"/>
                    </figure>
                    <div className="cat-button"><a href="">Ver productos</a></div></div>
            </section>
            <section className="mainHome categories" id="cat2">
                <div className="cat-content">
                    <h4 className="cat-tittle">Salud del streamer</h4>
                    <span className="cat-description">Cuida del recurso más importante en tu transmisión... <i>Tú!</i></span>
                    <figure>
                        <img className="cat-image" src="/assets/health.jpg" alt="Health"/>
                    </figure>
                    <div className="cat-button"><a href="">Ver productos</a></div>
                </div>
            </section>
            <section className="mainHome categories" id="cat3">
                <div className="cat-content">
                    <h4 className="cat-tittle">Muebles</h4>
                    <span className="cat-description">Haz de tu espacio de transmisión tan cómodo y conveniente que no necesites levantarte para nada. Encuentra mini heladeras, sillas, mueblería y accesorios aquí</span>
                    <figure>
                        <img className="cat-image" src="/assets/space.jpg" alt="Furniture"/>
                    </figure>
                    <div className="cat-button"><a href="">Ver productos</a></div>
                </div>
            </section>
            <section className="mainHome categories" id="cat4">
                <div className="cat-content">
                    <h4 className="cat-tittle">Canjeables</h4>
                    <span className="cat-description">Recompensa a tus espectadores con gran variedad de artículos canjeables, crea tu marca y fideliza</span>
                    <div className="cat-video"><video src="/assets/merchVideo.mp4" autoplay loop></video>
                    </div>            
                    <div className="cat-button"><a href="">Ver productos</a></div>
                </div>
            </section>
        </main>
    );
};

export default Home;