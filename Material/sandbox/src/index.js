import React from 'react';
import ReactDOM from 'react-dom';
// import {  BrowserRouter , Route, Switch } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';
// import Organization from './components/organization';
// import SecondComponent from './components/secondComponent';


// ReactDOM.render(<Organization/>, document.getElementById('root'));
// registerServiceWorker();


// const Router = ReactRouterDOM.BrowserRouter;
// const Route = ReactRouterDOM.Route;
// const Switch = ReactRouterDOM.Switch;

const App=() => (
    <div />
)

const Header = ()=> (
    <div >Header</div>
)
ReactDOM.render (
    <App>
      <Header/>
      
      {/* <payload>
            <BrowserRouter >
                <Switch>
                    <Route strict path="/organization/" component={Organization}/>
                    <Route path="/" component={SecondComponent}/>
                </Switch>
            </BrowserRouter>    
        </payload> */}
    </App>
    
, document.getElementById('root')       
);
registerServiceWorker();