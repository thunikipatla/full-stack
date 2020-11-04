import React from 'react';
import {connect} from 'react-redux';

class Activebook extends React.Component{
    render(){
        // console.log('active book console log', this.props.activebook)
        if(!this.props.activebook){
            return (
                <div>
                    <h3>Please select a book</h3>
                </div>
            )
        }
        return (
            <div>
                <h4>selected book</h4>
               {this.props.activebook.bookname} {this.props.activebook.author}
            </div>
        )
        
        
    }
}

function mappropstostate(state){
    // console.log('activebooks props', state.activebook);
    return {activebook: state.activebook}
}

export default connect(mappropstostate)(Activebook);
