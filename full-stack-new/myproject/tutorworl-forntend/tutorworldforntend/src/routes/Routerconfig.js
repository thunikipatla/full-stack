import React from 'react';
import {Route} from 'react-router-dom';
import TutorRegister from '../components/TutorRegister';
import Getalltutors from '../components/Getalltutors'
import ParentRegistration from '../components/ParentRegister';
import Logout from '../components/Logout';
import ParentLogin from '../components/ParentLogin';

class Routerconfig extends React.Component{
    render(){
        return(
            <div>
                <Route path="/TutorRegister" component={TutorRegister}></Route>
                <Route path="/Getalltutors" component={Getalltutors}></Route>
                <Route path="/ParentRegister" component={ParentRegistration}></Route>
                <Route path="/ParentLogin" component={ParentLogin}></Route>
                <Route path="/Logout" component={Logout}></Route>

            </div>
            

        )
    }
}

export default Routerconfig;