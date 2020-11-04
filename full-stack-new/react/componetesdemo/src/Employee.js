import React from 'react';

class Employee extends React.Component{

        constructor(){
            super();

            this.state = {
                employees: [],
                name: '',
                address: '',
                designation: ''
            }
        }

        AddEmployee(event){
            event.preventDefault();
            alert('Add Employee called!!');
        }

        namechange(event){
            event.preventDefault();
            console.log(event.target.name  + "\t" + event.target.value);
        }



    render(){
        return(
            <div>
        <form>
           name:<input type="text" onChange={this.namechange} name="name"></input><br/><br/>
           address: <input type="text" name="address"></input><br/><br/>
           designation: <input type="text" name="desigination"></input><br/><br/>
           <button onClick={this.AddEmployee}>AddEmployee</button>
        </form>
            </div>
        )
    }
}

export default Employee; 