import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Header from './components/Header';
import Routerconfig from './routes/Routerconfig';
import Getalltutors  from './components/Getalltutors';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Routerconfig/>
        {/* <Getalltutors/> */}
      </HashRouter>
      
    </div>
  );
}

export default App;
