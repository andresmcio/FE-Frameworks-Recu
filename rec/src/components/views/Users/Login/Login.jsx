import './loginMobile.css';
import './loginTablet.css';
import './loginDesktop.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    return (
        <main className="not-main-Home">
            <form action="/" method="post" className="main-form">
            <div className="logo-user">
                <span className="material-icons">account_circle</span>
            </div>
                <fieldset className="form-control">
                    <span className="material-icons">badge</span>
                    <input type="text" name="userName" placeholder="Nombre de usuario" className="username-control" minlength="4" required/>
                </fieldset>
                <fieldset className="form-control last-field">
                    <span className="material-icons password-icon">key</span>
                    <input type="password" name="password" placeholder="Contraseña" className="password-control" minlength="8" required/>
                </fieldset>
                <div className="btn-group">
                    <button type="reset" className="form-btn">Restablecer</button>
                    <button type="submit" className="form-btn">Login</button>
                </div>            
                <div className="register-wrapper" >
                    <span className="NewPerfil">Eres nuevo? Regístrate <a className="register" href="/register">aquí</a></span>                
                </div>
            </form>
        </main>
    );
};

export default Login;