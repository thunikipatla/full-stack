import React from 'react';

import Login from './Login.js'

import Footer from './Footer.js'

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>This react app</h1>
        <Login/>
        <Footer/>
        
      </div>
    )
  }
}

export default App;
