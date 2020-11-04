import React from 'react';
import {connect} from 'react-redux';

class ActiveProduct extends React.Component{
    render(){

        if(!this.props.Activeproduct){
            return(
                <h3>Select a product to display it price..</h3>
            )
        }

        return(
            <div>
                <h3>You have selected this product</h3>
                
        {this.props.Activeproduct.productcatageory}  {this.props.Activeproduct.brand} {this.props.Activeproduct.price}

            </div>
            
        )
        
    }
}

function mapstatetoprops(state){
    console.log('activeproduct state props', state.Activeproduct);
    return {Activeproduct:state.Activeproduct}
}

export default connect(mapstatetoprops)(ActiveProduct);