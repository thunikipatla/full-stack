import React from 'react';
import Youtube from './Youtube';
import Login from './Login';

class UserDashboard extends React.Component{
    constructor(){
        super();
    }
    render(){
            var token = localStorage.getItem('token');

            if(token){
                return(
                    <Youtube/>
                )
            }
            else{
                return(
                    <Login/>
                )
            }
        
    }
}

export default UserDashboard;