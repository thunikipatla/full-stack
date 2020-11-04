import React from 'react';
import {connect} from 'react-redux';

class Activebook extends React.Component{
    render(){
        // console.log('props',this.props.activebook)
        if(!this.props.activebook)
        return(
            <div>
                <h2>select a book</h2>
            </div>
        )
        return (
            <div>
                <h2>you have selected this book</h2>
                <h3>{this.props.activebook.name} {this.props.activebook.author} {this.props.activebook.price}</h3>
            </div>
        )
    }
}

function mapstatetoprops(state){
    // console.log('actibook application state', state.activebook);
    return {activebook:state.activebook}
}

export default connect(mapstatetoprops)(Activebook);