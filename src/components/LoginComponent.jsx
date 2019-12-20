import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// Utils
import { auth, provider } from '../utils/firebase';

const LoginComponent = props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user) {
            props.history.push('/tasks');
        }

        auth().onAuthStateChanged(user => {
            setUser(user);
        });
    }, [user]);

    const loginWithFacebook = () => {
        auth().signInWithPopup(provider)
            .then(({ user }) => {
                setUser(user);
            });
    }

    return (
        <div className="LoginComponent">
            <div className="LoginComponent-content">
                <p className="LoginComponent-title">Crear cuenta o Iniciar sesión</p>
                <button
                    className="LoginComponent-button"
                    onClick={loginWithFacebook}>
                    <i className="fab fa-facebook-square" />
                    <span className="LoginComponent-text-button">Iniciar sesión con Facebook</span>
                </button>
            </div>
        </div>
    );
}

export default withRouter(LoginComponent);

