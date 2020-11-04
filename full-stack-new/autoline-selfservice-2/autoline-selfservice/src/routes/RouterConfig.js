import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../components/Login';
import Header from '../components/Header';
import PostgresPack from '../components/Postgres';
import Notify from '../components/Notify';

class RouterConfig extends React.Component{

    render(){

        return(

            <div>
                <Route exact path="/" component={Login}></Route>
                <Route path="/Header" component={Header}></Route>
                <Route path="/PostgresPack" component={PostgresPack}></Route>
                <Route path="/Notify" component={Notify}></Route>
            </div>
        )
    }
}

export default RouterConfig;