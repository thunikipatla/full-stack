import React from 'react';
import Header from './Header';

class Logout extends React.Component{
    render(){
        localStorage.removeItem('token')
        return(
            <Header/>
        )
    }
}

export default Logout;