import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import UserDashboard from './UserDashboard';

class Login extends React.Component{
    history;

    constructor(){
        super();
        this.state={
            emailId: "",
            password: ""
        }
        this.onInputchange = this.onInputchange.bind(this);
        this.loginsubmit = this.loginsubmit.bind(this);
    }
    onInputchange(event){
        event.preventDefault();
        var value = event.target.value;
        var name = event.target.name;
        
        this.setState({[name]:value});
    }

    loginsubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3019/api/login', this.state).then(
            (response)=>{
                console.log(response);
                if(response.data.status){
                    // alert('Login successfull');
                    localStorage.setItem('token', response.data.token);
                    // localStorage.setItem('IsLoggedIn', true);
                    if(localStorage.getItem('token')){
                        this.props.history.push('/UserDashboard');
                    }
                }
            }
        
        )
    }

    render(){
        return(
            <div>
                <form onSubmit={this.loginsubmit}>

                    emailId: <input type="text" onChange={this.onInputchange} name="emailId"></input><br></br><br></br>
                    password: <input type="password" onChange={this.onInputchange} name="password"></input><br></br><br></br>
                    <button>Login</button>
                    
                </form>
            </div>
        )
    }
}

export default Login;

/*
var emailId = req.body.emailId;
var password = req.body.password;

*/