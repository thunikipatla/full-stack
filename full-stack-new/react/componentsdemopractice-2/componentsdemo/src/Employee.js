import React from 'react';
import Showemployee from './Showemployee'

class Employee extends React.Component{
    constructor(){
        super();
        this.state ={
            employees: [], 
            Name: '',
            Address: '',
            Designation: ''
        }
        this.oninputChange = this.oninputChange.bind(this);
        this.Addemployee = this.Addemployee.bind(this);

    }
    oninputChange(event){
        event.preventDefault();
       var name = event.target.name;
       var value = event.target.value;
        // console.log(name)
        // console.log(value)
        this.setState({[name]:value})
        // console.log(this.state)
    }
    Addemployee(event){
        event.preventDefault();
        var newEmployee = {
            Name: this.state.Name,
            Address: this.state.Address,
            Designation: this.state.Designation

        }
        // console.log(newEmployee);

        let employess = this.state.employees;
        employess.push(newEmployee);
        // console.log(this.state.employees);
        this.setState({employees:employess});

        // console.log(this.state);
    }



    render(){
        return(

            <div>
                <form>
                    Name: <input type="text" name="Name" onChange={this.oninputChange}></input><br></br><br></br>
                    Address: <input type="text" name="Address" onChange={this.oninputChange}></input><br></br><br></br>
                    Designation: <input type="text" name="Designation" onChange={this.oninputChange}></input><br></br><br></br>
                    <button onClick={this.Addemployee}>Submit</button>
                </form>
                <Showemployee emps={this.state.employees}/>
        
            </div>

        )
    }
}

export default Employee;