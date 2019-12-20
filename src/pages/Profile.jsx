import React, { useState, useEffect } from 'react';
// Utils
import { auth } from '../utils/firebase';

const Profile = props => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            auth().onAuthStateChanged(user => {
                setUser(user);
            });
        }, [user]);

        const logoutFacebook = () => {
            auth().signOut()
                .then(() => {
                    props.history.push('/login');
                });
        }

        return (
            
        <div className="Profile">
            {user && 
                <div className="Profile-container">
                    <div className="Profile-content">
                        <h2>Perfil</h2>
                        <div className="Profile-info">
                            <div>
                                <img
                                    className="Profile-image"
                                    src={user.photoURL}
                                    alt={user.displayName}
                                />
                            </div>
                            <div>
                                <h4>Nombre:<span>{user.displayName}</span></h4>
                                <h4>Correo:<span>{user.email}</span></h4>
                            </div>
                        </div>
                        <button 
                            onClick={logoutFacebook}
                            className="Profile-button"
                        >
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default Profile;