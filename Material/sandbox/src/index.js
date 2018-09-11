import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter , Route, Switch } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';
import Organization from './components/organization';
import SecondComponent from './components/secondComponent';


// ReactDOM.render(<Organization/>, document.getElementById('root'));
// registerServiceWorker();


// const Router = ReactRouterDOM.BrowserRouter;
// const Route = ReactRouterDOM.Route;
// const Switch = ReactRouterDOM.Switch;

ReactDOM.render (
    <BrowserRouter >
        <Switch>
            <Route exact path="/organization" component={Organization}/>
            <Route path="/" component={SecondComponent}/>
        </Switch>
    </BrowserRouter>
, document.getElementById('root')       
);
registerServiceWorker();