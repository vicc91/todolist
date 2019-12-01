import React, { useState, useEffect } from 'react';

// Components
import TasksList from '../components/TasksList';
import CreateTask from '../components/CreateTask';

// Utils 
import { auth } from '../utils/firebase';
import LoginComponent from '../components/LoginComponent';

const Tasks = ({
    category,
    addTask,
    toggleDoneTask,
}) => {
    const [user, setUser] = useState(null);

        useEffect(() => {
            auth().onAuthStateChanged(user => {
                setUser(user);
            });
        }, [user]);

    return (
        <div className="Tasks">
            <div className="Tasks-container">
                {user ? 
                    category.name ?
                        <div className="Tasks-content">
                            <h2 className="Tasks-title">{category.name}</h2>
                            <CreateTask addTask={addTask} />
                            <TasksList tasks={category.tasks} toggleDoneTask={toggleDoneTask}/>
                        </div> :
                        <div className="Task-not-content">
                            <p>Crea una categoria</p>
                        </div>
                    : 
                    <div className="Tasks-not-login">
                        <p>Inicia sesión para crear tareas o ver las tareas ya creadas.</p>
                        <LoginComponent />
                    </div>
                }

                
            </div>
        </div>
    );
}

export default Tasks;