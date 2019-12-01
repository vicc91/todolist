import React, { useState, useEffect } from 'react';
import LoginComponent from '../components/LoginComponent';

// Utils
import { auth } from '../utils/firebase';

const Login = ({ history }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUser(user);
        });

        if (user) {
            history.push('/tasks')
        }
    }, [user]);

    return (
        <div className="Login">
            <div className="Login-container">
                <div className="Login-content">
                    <LoginComponent />
                </div>
            </div>
        </div>
    );
}
   
export default Login;