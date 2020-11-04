import React from 'react';

class Showemployee extends React.Component{
    renderList(){
        let finalList = this.props.emps.map( function(empl){
        return <li key={empl.Name}> {empl.Name} {empl.Address} {empl.Designation}</li>
        })
        return finalList;
    }
    
    render(){
        // console.log(this.props);
        return(
            <div>
                <h1>Employess List here</h1>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

export default Showemployee;