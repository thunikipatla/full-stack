import React from 'react';
import axios from 'axios';
import Getalltutors from './Getalltutors';

class ParentLogin extends React.Component{
    constructor(){
        super();
        this.state={
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
        console.log(this.state);
        axios.post("http://localhost:9012/v1/parent/parentlogin", this.state).then(
            (response)=>{
                if(response.data.status){
                    var token = localStorage.setItem('token', response.data.token);
                    this.props.history.push('/Getalltutors')
                }
            }
        )
    }

    render(){
        return(
            <form onSubmit={this.formsubmit}>
                phone: <input onChange={this.oninputchange} type="text" name="phone"></input><br></br><br></br>
                password: <input onChange={this.oninputchange} type="password" name="password"></input><br></br><br></br>
                <button>Login</button>

            </form>
        )
    }
}
export default ParentLogin;