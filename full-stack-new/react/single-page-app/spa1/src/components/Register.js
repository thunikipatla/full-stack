import React from 'react'; 

class Register extends React.Component{
    render(){
        return(
            <div>
                
            <form>
                Username: <input type="text"></input><br></br><br></br>
                Email Id: <input type="email"></input><br></br><br></br>
                Password: <input type="password"></input><br></br><br></br>
                <button>Register</button>
            </form>

                </div>
        )
    }
}

export default Register;