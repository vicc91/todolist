import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Layout from '../components/Layout';

// Pages
import Tasks from '../pages/Tasks';
import Login from '../pages/Login';

// Styles
import '../styles/global.css';

const App = () => {
    const [state, setState] = useState({
        selectedCategoryIndex: null,
        categories: []
    });

    const addCategory = ((categoryName) => {    
        const newCategory = {
            name: categoryName,
            tasks: []
        }
    
        setState({
            selectedCategoryIndex: state.selectedCategoryIndex === null ? 0 : state.categories.length,
            categories: [...state.categories, newCategory]    
        });
    });

    const selectCategory = index => {
        setState({
            selectedCategoryIndex: index,
            categories: [...state.categories]
        });
    }

    const addTask = (taskName) => {
        const task = {
            text: taskName,
            done: false
        }
        
        const categories = state.categories;
        const currentCategory = categories[state.selectedCategoryIndex];
        currentCategory.tasks = [...currentCategory.tasks, task];
        categories[state.selectedCategoryIndex] = currentCategory;

        setState({
            categories,
            selectedCategoryIndex: state.selectedCategoryIndex
        });
    }

    const toggleDoneTask = (taskIndex) => {
        const categories = state.categories;
        const currentCategory = categories[state.selectedCategoryIndex];
        const currentTask = currentCategory.tasks[taskIndex];

        currentTask.done = !currentTask.done;
        categories[state.selectedCategoryIndex].tasks[taskIndex] = currentTask;
        
        setState({
            categories: categories,
            selectedCategoryIndex: state.selectedCategoryIndex
        });
    }

    return (
        <BrowserRouter>
            <Layout 
                categories={state.categories}
                addCategory={addCategory}
                selectCategory={selectCategory}
            >
                <Switch>
                    <Route exact path="/tasks">
                        <Tasks 
                            category={state.selectedCategoryIndex === null ? {}
                            : state.categories[state.selectedCategoryIndex]}
                            addTask={addTask}
                            toggleDoneTask={toggleDoneTask}
                        />
                    </Route>
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;