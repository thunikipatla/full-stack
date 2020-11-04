import React from 'react';
import Employee from './Employee';

class ShowEmployee extends React.Component{
    renderList(){
        var newlist = this.props.emp.map(function(empl){
        return <li key={empl.name}>{empl.name} {empl.address}</li>
        })
        return newlist;
    }

    render(){    
        return(
            <div>
                <h1>Here you will see Employee list</h1>
                <ul>
                {this.renderList()}
                </ul>
                
            </div>
        )
    }
}

export default ShowEmployee;