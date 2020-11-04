import React from 'react';
import Header from './Header';

class LoginControll extends React.Component{
    constructor(){
        super();

        this.state={
            IsLoggedIn: false
        }
    }

    HandleLoginclick(){
        this.setState({IsLoggedIn: true});
    }
    HandleLogoutclick(){
        this.setState({IsLoggedIn: false});
    }

    render(){
        return(
            <div>
                <Header onclick={onclick => {this.setState({IsLoggedIn:true})}}/>
            </div>
        )
    }

}