import React from 'react';
import Login from './Login';

class Logout extends React.Component{
    constructor(){
        super();
    }
    render(){
        localStorage.removeItem('token')
        return(
            <Login/>
        )
    }
}

export default Logout;