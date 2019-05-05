import React, { Component } from 'react';
import Header from './components/Header';
import MainPage from './components/MainPage';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Header/>
      <MainPage/>
        
      </div>
      </Provider>
    );
  }
}

export default App;
