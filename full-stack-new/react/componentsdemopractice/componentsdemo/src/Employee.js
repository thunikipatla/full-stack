import React from 'react';
import ShowEmployee from './ShowEmployee';

class Employee extends React.Component{

    constructor(){
        super();
        this.state={
            employees: [],
            name: '', 
            address: '',
            designation: ''
        }
        this.inputChange = this.inputChange.bind(this);
        this.AddEmployee = this.AddEmployee.bind(this);

    }
    

    AddEmployee(event){
        event.preventDefault();
        // alert('Add Employee called');
        var newEmployee = {
            name: this.state.name,
            address: this.state.address,
            designation: this.state.designation
        }
        var employee = this.state.employees;
        employee.push(newEmployee);
        // console.log(this.state.employees);
        this.setState({employees:employee});
    }
    inputChange(event){
        event.preventDefault();
        var name = event.target.name;
        var value = event.target.value;
        this.setState({[name]:value});

    }

    

    render(){
        return(
            <div>
            <form>
            name: <input onChange={this.inputChange} type="text" name="name"/><br></br><br></br>
            address: <input onChange={this.inputChange} type="text" name="address"/><br></br><br></br>
            designation: <input onChange={this.inputChange} type="text" name="designation"/><br></br><br></br>
            <button onClick={this.AddEmployee}>AddEmployee</button>
        </form>   
        <ShowEmployee emp={this.state.employees}/>
        </div>
        )
    }
}

export default Employee;