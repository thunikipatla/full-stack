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
                    alert('Registration done, now you can able to access to your profile');
                }
            }
        )
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.formsubmit}>
                    firstname: <input onChange={this.oninputchange} type="text" name="firstname"></input><br></br><br></br>
                    lastname: <input onChange={this.oninputchange} type="text" name="lastname"></input><br></br><br></br>
                    email: <input onChange={this.oninputchange} type="email" name="email"></input><br></br><br></br>
                    phone: <input onChange={this.oninputchange} type="text" name="phone"></input><br></br><br></br>
                    password: <input onChange={this.oninputchange} type="password" name="password"></input><br></br><br></br>
                    qualification: <input onChange={this.oninputchange} type="text" name="qualification"></input><br></br><br></br>
                    subjects: <input onChange={this.oninputchange} type="text" name="subjects"></input><br></br><br></br>
                    timings: <select onChange={this.oninputchange} name="timings">
                        <option value="Please select the value">Please select the value</option>
                        <option value="Morning">Morning</option>
                        <option value="evening">evening</option>
                    </select><br></br><br></br>
                    {/* timings: <input onChange={this.oninputchange} type="text" name="timings"></input><br></br><br></br> */}
                    experience: <input onChange={this.oninputchange} type="text" name="experience"></input><br></br><br></br>
                    rating: <input onChange={this.oninputchange} type="text" name="rating"></input><br></br><br></br>
                    <button>Register</button>
                </form>
                

            </div>
        )
    }
}

export default Register;