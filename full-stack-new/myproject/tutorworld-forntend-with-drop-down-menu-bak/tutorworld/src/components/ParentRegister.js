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
            <React.Fragment>
            <form onSubmit={this.formsubmit} class="form-group">
                firstname: <input onChange={this.oninputchange} type="text"  class="form-control" name="firstname"></input>
                lastname: <input onChange={this.oninputchange} type="text"  class="form-control" name="lastname"></input>
                email: <input onChange={this.oninputchange} type="email"  class="form-control" name="email"></input>
                phone: <input onChange={this.oninputchange} type="text"  class="form-control" name="phone"></input>
                password: <input onChange={this.oninputchange} type="password"  class="form-control" name="password"></input><br></br><br></br>

                <button class="btn btn-success">Register</button>
            </form>

            </React.Fragment>
        )
    }
}

export default ParentRegistration;