import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header'
import RouterConfig from './Routing/RouterConfig';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <RouterConfig/>
      </HashRouter>
      
    </div>
  );
}

export default App;
