import React, { Component } from 'react';

//import logo from './logo.svg';
//import './App.css';
import './App.css';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';

const ACTION_CHANGE_ACCOUNT= 'ACTION_CHANGE_ACCOUNT';
const ACTION_CHANGE_CLIENT = 'ACTION_CHANGE_CLIENT0';

const actionChangeAccount = {
  type: ACTION_CHANGE_ACCOUNT, 
  payload: null
}

const actionChangeClient = {
  type:ACTION_CHANGE_CLIENT,
  payload: null
}


const initialState = {
  account:'',
  client: ''
};
const rootReducer = (state=initialState, action) => {return state};
const store=createStore (rootReducer);
console.log ("state:");
console.log (store.getState());


class Account extends Component {
  render () {
    return (
      <div className="Account">
          <h3> Счет </h3>
          <input type="Text" name = "iAccount" placeholder="Account"/>  
      </div>
    );
  }
}

class Client extends Component {
  render () {
    return (
      <div className="Client">
          <h3> Клиент </h3>
          <input type="Text" name = "iClient" placeholder="Client"/>  
      </div>
    );
  }
}


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="e1"> <Account /> </div>
          <div className="e1"> <Client /> </div>
          <div/>
        </div>
      </Provider>
    );
  }
}

const mapStateProps = (state) => {
  console.log ('mapStateProps')
  return { test:1}
}

const WrappedApp = connect (mapStateProps)(App)
/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

export default App;
