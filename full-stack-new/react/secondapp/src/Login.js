import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div>
                Username: <input type="text" placeholder="Username Here"></input><br/><br/>
                Password: <input type="password" placeholder="Password Here"></input><br/><br/>
                <button>Submit</button>
            </div>
        )
    }
}

export default Login; 
