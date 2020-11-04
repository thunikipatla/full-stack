import React from 'react'; 

class Login extends React.Component{
    render(){
        return(
            <div>
                
            <form>
                Username: <input type="text"></input><br></br><br></br>
                Password: <input type="password"></input><br></br><br></br>
                <button>Login</button>
            </form>

                </div>
        )
    }
}

export default Login;