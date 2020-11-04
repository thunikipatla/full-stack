import React from 'react';

class Login extends React.Component{
    constructor(){
        super();

        this.state={
            employees: {

            }
        }
    }
        
    addemployee(event){
        event.preventDefault();
        alert('submitted employee deatils')
    }

    namechange(event){
        console.log(event.target.value);
    }
    addresschange(event){
        console.log(event.target.name + "\t" + event.target.value);
    }

    render(){
        return (
            <div>
                name: <input type="text" onChange={this.namechange} name="name"></input><br/>
                address: <input type="text" onChange={this.addresschange} name="address"></input><br/>
                <button onClick={this.addemployee}>Submit</button>
            </div>
        )
    }
}

export default Login;