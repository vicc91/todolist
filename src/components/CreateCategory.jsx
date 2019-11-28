import React, { useState } from 'react';

const CreateCategory = ({ addCategory }) => {
    const [valueInputCategory, setValueInputCategory] = useState(''); 
    const [isValidInput, setIsValidInput] = useState(true);
    
    const createCategory = event => {
        event.preventDefault();
        if (!valueInputCategory || valueInputCategory <= 2) {
            setIsValidInput(false);
            return;
        }
        setIsValidInput(true);
        addCategory(valueInputCategory);

        setValueInputCategory('');
    }

    const handleChangeInputCategory = event => {
        setValueInputCategory(event.target.value);
    }

    return (
    <div className="CreateCategory">
        <form className="CreateCategory-form" onSubmit={createCategory}>
            <input
                className="CreateCategory-input"
                type="text"
                name="category"
                value={valueInputCategory}
                onChange={handleChangeInputCategory}
                placeholder="Nombre de la categoria"
            />
            {!isValidInput && 
                <p className="CreateCategory-message">Nombre inválido, debe tener mínimo tres caracteres.</p>
            }
            <button 
                type="submit"
                className="CreateCategory-button">
                    Crear
                </button>
        </form>
    </div>
    );
}

export default CreateCategory;