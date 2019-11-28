import React from 'react';

const CategoriesList = ({ categories, selectCategory }) => {
    const getInfoTasksOfCategory = (category) => {
        const lengthTasks = category.tasks.length;
        const lengthTasksDone = category.tasks.filter(task => task.done).length;

        return (
        <span className="CategoriesList-item-span">
            {`${lengthTasksDone}/${lengthTasks}`}
        </span>
        );
    }

    return (
        <div className="CategoriesList">
            <ul className="CategoriesList-items">
            {categories.map((category, index) => (
                    <li key={`category-${index}`} onClick={() => selectCategory(index)}>
                        {category.name}
                        {getInfoTasksOfCategory(category)}
                    </li>
            ))}
            </ul>
        </div>
    );
}

export default CategoriesList;