import React from 'react';
import {Route} from 'react-router-dom';
import Notify from '../componenets/Notify';
import Postgres from '../componenets/postgres';

class RouterConfig extends React.Component{
    render(){
        return(
           <div>
                <Route path="/Notify" component={Notify}></Route>
                <Route path="/Postgres" component={Postgres}></Route>
            </div>
        )
    }
}

export default RouterConfig;