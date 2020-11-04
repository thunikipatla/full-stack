import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Products from '../components/Products';

class RouterConfig extends React.Component{
    render(){
        return(
            <div>
                <Route path="/Login" component={Login}></Route>
                <Route path="/Register" component={Register}></Route>
                <Route path="/Products" component={Products}></Route>

            </div>
        )
    }
}

export default RouterConfig;