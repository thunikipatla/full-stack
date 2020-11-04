import React from 'react';

class Register extends React.Component{
    constructor(){
        super();

    }
    
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="FirstName" placeholder="Enter FirstName here"></input><br></br><br></br>
                    <input type="text" name="Lastname" placeholder="Enter LastName here"></input><br></br><br></br>
                    <input type="email" name="Email Id" placeholder="Enter Email here"></input><br></br><br></br>
                    <input type="text" name="Mobile Number" placeholder="Enter mobile number here"></input><br></br><br></br>
                    <input type="password" name="password" placeholder="Enter password here"></input><br></br><br></br>
                </form>
                <button>Register</button>

            </div>
        )
    }
}

export default Register;