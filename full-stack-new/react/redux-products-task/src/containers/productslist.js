import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectproduct} from '../actions/index';

class ProductsList extends React.Component{
    renderList(){
        var productslist = this.props.products.map((product)=>{
        return <li onClick={()=>{this.props.selectproduct(product)}} key={product.brand}>{product.productcatageory} {product.brand}</li>
    
        })
        return productslist;
    }

    render(){
        return(
            <div>
                <h3>ProductsList</h3>
                <ul>
                    {this.renderList()}
                </ul>
                
            </div>
        )
    }
}

function mappropstostate(state){
    // console.log('props', state.products);
    return {products:state.products}
}

function bindactiontoprops(dispatch){
    return bindActionCreators({selectproduct:selectproduct},dispatch);
}
export default connect(mappropstostate,bindactiontoprops)(ProductsList);


