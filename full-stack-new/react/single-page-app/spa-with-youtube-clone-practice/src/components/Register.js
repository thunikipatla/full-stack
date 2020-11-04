import React from 'react';
import axios from 'axios';
import UserDashboard from './UserDashboard';

class Register extends React.Component{
    constructor(){
        super(); 
        this.state={
            firstName: "",
            lastName: "",
            emailId: "",
            password: "",
            mobileNumber: ""
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onInputChange(event){
        event.preventDefault();
        console.log('input change function');
        var value = event.target.value;
        var name = event.target.name;

        // this.setState({[name]:value})
        this.setState({[name]:value})
    }

    formSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3019/api/register', this.state).then(
            (response)=>{
                console.log(response);
                localStorage.setItem('token',response.data.token);
                this.props.history.push('/UserDashboard')
                          
            }
        )
    }
    render(){
        return(
            <div>
                <form onSubmit={this.formSubmit}>
                firstName: <input onChange={this.onInputChange} type="text" name="firstName"></input><br></br>
                lastName: <input onChange={this.onInputChange} type="text" name="lastName"></input><br></br>
                emailId: <input onChange={this.onInputChange} type="email" name="emailId"></input><br></br>
                password: <input onChange={this.onInputChange} type="password" name="password"></input><br></br>
                mobileNumber: <input onChange={this.onInputChange} type="text" name="mobileNumber"></input><br></br>
                <button>Register</button>
                </form>
            </div>
        )
    }
}

export default Register;

/*
firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        password: password,
        mobileNumber: mobileNumber
*/