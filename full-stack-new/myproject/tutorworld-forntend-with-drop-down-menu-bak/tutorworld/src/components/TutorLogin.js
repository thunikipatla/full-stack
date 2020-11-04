import React from 'react';
import axios from 'axios';

class TutorLogin extends React.Component{
    constructor(){
        super();
        this.state = {
            phone: "",
            password: ""
        }
        this.oninputchange = this.oninputchange.bind(this);
        this.formsubmit = this.formsubmit.bind(this);
    }

    oninputchange(event){
        event.preventDefault();
        var name = event.target.name;
        var value = event.target.value;
        this.setState({[name]:value})
    }
    formsubmit(event){
        event.preventDefault();
        axios.post("http://localhost:9012/v1/tutor/tutorlogin", this.state).then(
            (response)=>{
                // console.log(response);
                if(response.data.status){
                   var token =  localStorage.setItem('token', response.data.token)
                }
            }
        )
    }
    

    render(){

        return(
            <form onSubmit={this.formsubmit} class="form-group">
                phone: <input onChange={this.oninputchange} type="text" class="form-control" name="phone"></input>
                password: <input onChange={this.oninputchange} type="password" class="form-control" name="password"></input><br></br>
                <button class="btn btn-success">Login</button>

            </form>
        )
    }
}

export default TutorLogin;