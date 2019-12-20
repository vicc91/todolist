import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
// Components
import Layout from '../components/Layout';
// Pages
import Tasks from '../pages/Tasks';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
// Global Styles
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route exact path="/tasks" component={Tasks} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App