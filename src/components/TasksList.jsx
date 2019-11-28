import React from 'react';

const TasksList = ({ tasks, toggleDoneTask }) => {

    const getIconStateDoneTask = done => {
        return done ? 
            <i className="TasksList-icon far fa-check-square"></i> 
            :
            <i className="TasksList-icon far fa-square"></i>
    }

    return (
        <div className="TasksList">
            <ul className="Tasks-items">
                {tasks.map((task, index) => (
                    <li key={`task-${index}`} onClick={() => toggleDoneTask(index)}>
                        {getIconStateDoneTask(task.done)} {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TasksList;