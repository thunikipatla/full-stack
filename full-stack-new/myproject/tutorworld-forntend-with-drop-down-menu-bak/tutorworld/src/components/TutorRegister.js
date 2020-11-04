import React from 'react';
import axios from 'axios';

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: "",
            qualification: "",
            subjects: "",
            timings: "",
            experience: "",
            rating: ""
            // image: ""
        }
        this.oninputchange = this.oninputchange.bind(this);
        this.formsubmit = this.formsubmit.bind(this);
    }
    oninputchange(event){
        event.preventDefault();
        var value = event.target.value;
        var name = event.target.name;
        this.setState({[name]:value});
    }
    formsubmit(event){
        event.preventDefault();
        // console.log(this.state);
        // alert('Regustration successfull');
        axios.post("http://localhost:9012/v1/tutor/registration", this.state).then(
            (response)=>{
                if(response.data.status){
                    alert('Registration done, now you can able to access to your profile by going to Login page');
                }
            }
        )
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.formsubmit} class="form-group">
                    firstname: <input onChange={this.oninputchange} type="text" class="form-control" name="firstname"></input>
                    lastname: <input onChange={this.oninputchange} type="text" class="form-control" name="lastname"></input>
                    email: <input onChange={this.oninputchange} type="email" class="form-control" name="email"></input>
                    phone: <input onChange={this.oninputchange} type="text" class="form-control" name="phone"></input>
                    password: <input onChange={this.oninputchange} type="password" class="form-control" name="password"></input>
                    qualification: <input onChange={this.oninputchange} type="text" class="form-control" name="qualification"></input>
                    subjects: <input onChange={this.oninputchange} type="text" class="form-control" name="subjects"></input>
                    timings: <select onChange={this.oninputchange} class="form-control" name="timings">
                        <option value="Please select the value">Please select the value</option>
                        <option value="Morning">Morning</option>
                        <option value="evening">evening</option>
                    </select>
                    {/* timings: <input onChange={this.oninputchange} type="text" name="timings"></input><br></br><br></br> */}
                    experience: <input onChange={this.oninputchange} type="text" class="form-control" name="experience"></input>
                    Self rating: <input onChange={this.oninputchange} type="text" class="form-control" name="rating"></input><br></br>
                    {/* Photo: <input onChange={this.oninputchange} type="file" name="image"></input><br></br><br></br> */}
                    <button class="btn btn-success">Register</button>
                </form>
                

            </div>
        )
    }
}

export default Register;