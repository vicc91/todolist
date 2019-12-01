import React from 'react';

// Utils
import { auth, provider } from '../utils/firebase';

const LoginComponent = () => {
    const loginFacebook = () => {
        auth().signInWithPopup(provider)
            .then(({ user }) => {
                console.log(user);
            });
    }
    
    return (
        <div className="LoginComponent">
            <div className="LoginComponent-content">
                <p className="LoginComponent-title">Crear cuenta o Iniciar sesión</p>
                <button
                    className="LoginComponent-button"
                    onClick={loginFacebook}>
                    <i className="fab fa-facebook-square" />
                    <span className="LoginComponent-text-button">Iniciar sesión con Facebook</span>
                </button>
            </div>
        </div>
    );
}

export default LoginComponent

