import './registerMobile.css';
import './registerTablet.css';
import './registerDesktop.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Register = () => {

    const navigate = useNavigate();
    const [userRegisterData, setUserRegisterData] = useState({
        fullName:'',
        userName:'',
        email: '',
        password:'',
        passwordConfirm: ''
    });
    const [alert, setAlert] = useState('');

    const userRegisterChange = (e) => {
        const { userName, value } = e.target;
        setUserRegisterData((prevData) => ({
          ...prevData,
          [userName]: value
        }));
      };

      const userRegisterSubmit = async (e) => {
        try {
            e.preventDefault();
            axios.post('http://localhost:2023/users/register', userRegisterData, {headers: {
                'Content-Type': 'application/json',
            }});
            setUserRegisterData({
                fullName:'',
                userName:'',
                email: '',
                password:'',
                passwordConfirm: ''
            })
            navigate("/login");
            setAlert('Successfully register');
        } catch(err) {
            setAlert('There was an error with the information');
        }

      };

    return (

        <main className="not-main-Home">
            <form  method="post" autocomplete="off" className="main-form">
                <div className="logo-user">
                    <span className="material-icons">account_circle</span>
                </div>
                <fieldset className="form-control">
                    <span className="material-icons">person_pin</span>
                    <input type="text" name="fullName" placeholder="Nombre y apellido" minlength="3" className="control" required />
                </fieldset>
                <fieldset className="form-control">
                    <span className="material-icons">badge</span>
                    <input type="text" name="userName" placeholder="Nombre de usuario" className="control" required />
                </fieldset>
                <fieldset className="form-control">
                    <span className="material-icons">email</span>
                    <input type="email" name="email" placeholder="E-mail" className="control" required />
                </fieldset>
                <fieldset className="form-control">
                    <span className="material-icons">key</span>
                    <input type="password" name="password" placeholder="Contraseña" className="control" required />
                </fieldset>
                <fieldset className="form-control last-field">
                    <span className="material-icons">password</span>
                    <input type="password" name="passwordConfirm" placeholder="Confirmar contraseña" className="control" required />
                </fieldset>
                <div className="btn-group">
                    <button type="reset" className="form-btn">Restablecer</button>
                    <button type="submit" className="form-btn">Registrar</button>
                </div>     
            </form>
        </main>
    );

};

export default Register;