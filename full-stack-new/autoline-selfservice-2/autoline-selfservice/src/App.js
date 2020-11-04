import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Header from './components/Header';
import RouterConfig from './routes/RouterConfig';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <HashRouter>
        {/* <Header/> */}
        {/* <Login/> */}
        <RouterConfig/>
        </HashRouter>
    </div>
  );
}

export default App;
