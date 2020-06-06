import React from 'react';
import Main from './pages/Main';
import Search from './pages/Search';
import ScrollUpButton from './components/shared/ScrollUpButton';
import {
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    return (
    <div className="layout">
        <Switch>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
        <ScrollUpButton />
    </div>
    );
};

export default App;
