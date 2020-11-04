import React from 'react';
import axios from 'axios';
import Getalltutors from './Getalltutors';
 
class ParentRegistration extends React.Component{
    constructor(){
        super();
        this.state={
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: ""
        }
        this.oninputchange = this.oninputchange.bind(this);
        this.formsubmit =  this.formsubmit.bind(this);
    }
    oninputchange(event){
        event.preventDefault();
        var name = event.target.name;
        var value = event.target.value;
        this.setState({[name]:value})
    }
    formsubmit(event){
        event.preventDefault();
        console.log(this.state);
        // alert('Parent registration successfull');
        axios.post("http://localhost:9012/v1/parent/register", this.state).then(
            (response)=>{
                // console.log(response);
                if(response.data.status){
                    var token = localStorage.setItem('token', response.data.token)
                    this.props.history.push('/Getalltutors')
                }
                else{
                    alert('Something went wrong')
                }
            }
        )
        // this.props.history.push('/Getalltutors')
    }


    render(){
        return(
            <form onSubmit={this.formsubmit}>
                firstname: <input onChange={this.oninputchange} type="text" name="firstname"></input><br></br><br></br>
                lastname: <input onChange={this.oninputchange} type="text" name="lastname"></input><br></br><br></br>
                email: <input onChange={this.oninputchange} type="email" name="email"></input><br></br><br></br>
                phone: <input onChange={this.oninputchange} type="text" name="phone"></input><br></br><br></br>
                password: <input onChange={this.oninputchange} type="password" name="password"></input><br></br><br></br>

                <button>Register</button>
            </form>
        )
    }
}

export default ParentRegistration;