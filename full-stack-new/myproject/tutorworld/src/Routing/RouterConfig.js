import React from 'react';
import { Route } from 'react-router-dom';
import Register from '../components/Register';

class RouterConfig extends React.Component{
    render(){
        return(

            <div>
                <Route path="/Register" component={Register}></Route>

            </div>
        )
    }
}

export default RouterConfig;