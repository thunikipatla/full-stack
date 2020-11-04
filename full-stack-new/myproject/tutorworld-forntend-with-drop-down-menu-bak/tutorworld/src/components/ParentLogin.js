import React from 'react';
import axios from 'axios';
// import Getalltutors from './Getalltutors';
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
            <form onSubmit={this.formsubmit} class="form-group">
                phone: <input onChange={this.oninputchange} type="text" class="form-control" name="phone"></input>
                password: <input onChange={this.oninputchange} type="password" class="form-control" name="password"></input><br></br>
                <button class="btn btn-success">Login</button>

            </form>
        )
    }
}
export default ParentLogin;