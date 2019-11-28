import React from 'react';

// Components
import TasksList from '../components/TasksList';
import CreateTask from '../components/CreateTask';

const Tasks = ({ category, addTask, toggleDoneTask }) => (
    <div className="Tasks">
        <div className="Tasks-container">
            {category.name ?
                <div className="Tasks-content">
                    <h2 className="Tasks-title">{category.name}</h2>
                    <CreateTask addTask={addTask} />
                    <TasksList tasks={category.tasks} toggleDoneTask={toggleDoneTask}/>
                </div> :
                <div className="Task-not-content">
                    <p>Crea una categoria</p>
                </div>
            }
        </div>
    </div>
);

export default Tasks;