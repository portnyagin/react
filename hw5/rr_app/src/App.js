import React, { Component } from 'react';

//import logo from './logo.svg';
//import './App.css';
import './App.css';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';

const ACTION_CHANGE_ACCOUNT= 'ACTION_CHANGE_ACCOUNT';
const ACTION_CHANGE_CLIENT = 'ACTION_CHANGE_CLIENT';


const changeAccount = (newAccount) => {
  return  {
    type: ACTION_CHANGE_ACCOUNT, 
    payload: newAccount
  }
};
const changeClient= (newClient) => {
  return  {
    type: ACTION_CHANGE_CLIENT, 
    payload: newClient
  }
};

const initialState = {
  account:'47422',
  client: 'PAO Sberbank'
};

const rootReducer = (state=initialState, action) => {
  console.log ('reducer');
  switch (action.type) {
    case ACTION_CHANGE_ACCOUNT:
      // console.log ('rootReducer:ACTION_CHANGE_ACCOUNT');
      // console.log({...state, account: action.payload});
      return {...state, account: action.payload}
    case ACTION_CHANGE_CLIENT:
      // console.log ('rootReducer:ACTION_CHANGE_CLIENT');
      // console.log({...state, account: action.payload});
      return {...state, client: action.payload}
  }
  return state
};
const store=createStore (rootReducer);
// console.log ("state:");
// console.log (store.getState());


class Account extends Component {
  render () {
    const dispatch = this.props.dispatch;
    return (
      <div className="Account">
          <h3> Счет </h3>
          <input 
            type="Text" 
            value = {this.props.account} 
            placeholder="Account"
            onChange = {(event)=> {
              console.log('Account.OnChange');
              dispatch (changeAccount(event.target.value))
            }}
          />  
      </div>
    );
  }
}

class Client extends Component {
  render () {
    const dispatch = this.props.dispatch;
    return (
      <div className="Client">
          <h3> Клиент </h3>
          <input 
            type="Text" 
            value ={this.props.client} 
            placeholder="Client"
            onChange = {(event)=> {
                dispatch (changeClient(event.target.value));
            }}
          />  
      </div>
    );
  }
}


class App extends Component {
  render () {
    console.log ('App Component:');
    console.log (this.props);
    return (
        <div>
            <div > <WrappedAccount /> </div>
            <div > <WrappedClient /> </div>
            <div> 
                {this.props.client + ' ' + this.props.account} 
            </div>
        </div>
    );
  }
}

const mapAccountProps = (state) => {
    console.log ('mapAccountProps')
  return { 
    account: state.account
  }
}

const mapClientProps = (state) => {
  console.log ('mapClintProps')
  return { 
    client: state.client
  }
}

const WrappedAccount = connect (mapAccountProps)(Account)
const WrappedClient = connect (mapClientProps)(Client)

class Main extends Component {
  render () {
    return (
    <Provider store={store}>
      <App/>
    </Provider>
    )
  }
}

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

export default Main;
