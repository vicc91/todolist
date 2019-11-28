import React, { useState } from 'react';

const CreateTask = ({ addTask }) => {
    const [inputTaskValue, setInputTaskValue] = useState('');
    const [isValidInput, setIsValidInput] = useState(true);

    const createTask = event => {
        event.preventDefault();
        if (!inputTaskValue || inputTaskValue.length <=2) {
            setIsValidInput(false);
            return;
        }

        setInputTaskValue(true);
        addTask(inputTaskValue);

        setInputTaskValue('');
    }

    const handleChangeInputTask = event => {
        setInputTaskValue(event.target.value);
    }

    return (
        <div className="CreateTask">
            <form className="CreateTask-form" onSubmit={createTask}>
                <input
                    type="text"
                    name="task"
                    onChange={handleChangeInputTask}
                    className="CreateTask-input"
                    placeholder="Escribe la tarea"
                    value={inputTaskValue}
                />
                {!isValidInput && 
                    <p className="CreateCategory-message">La tarea, debe tener mínimo tres caracteres.</p>
                }
                <button
                    type="submit"
                    className="CreateTask-button"
                >
                    Crear Tarea
                </button>
            </form>
        </div>
    );
}

export default CreateTask;