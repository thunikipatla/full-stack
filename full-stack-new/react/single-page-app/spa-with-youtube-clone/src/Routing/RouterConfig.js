import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Products from '../components/Products';
import Youtube from '../components/Youtube';
import UserDashboard from '../components/UserDashboard';
import Logout from '../components/Logout';

class RouterConfig extends React.Component{
    render(){
        return(
            <div>
            <Route path="/Login" component={Login}></Route>
            <Route path="/Register" component={Register}></Route>
            {/* <Route path="/Products" component={Products}></Route> */}
            <Route path="/UserDashboard" component={UserDashboard}></Route>
            <Route path="/Logout" component={Logout}></Route>
            </div>
            
        )
    }
}

export default RouterConfig;