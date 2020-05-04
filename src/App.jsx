import React from 'react';
import Main from './pages/Main';
import List from './pages/List';

import {
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    return (
    <div className="layout">
        <Switch>
            <Route path="/list">
                <List />
            </Route>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    </div>
    );
};

export default App;
