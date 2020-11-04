import React from 'react';
import './Login.css';
import { createHashHistory } from 'history'
export const history = createHashHistory()

class Login extends React.Component{

    constructor(){
        super();

        this.onsubmit = this.onsubmit.bind(this);

        
    }
    onsubmit(event){
        event.preventDefault();
        console.log('form submitted')
        history.push('/Header');
    }
    
    render(){
        return(
            <React.Fragment>
            <div class="row bg-success">
                <div class="col-sm-4">

                </div>
                <div class="col-sm-4">
                    <h3>Autoline Drive Self service portal</h3>
                </div>
            
            </div>
                <div class="login-container">
            <div class="row">
                <div class="col-sm-4">
                    
                </div>
                <div class="col-sm-4 login-form-1 bg-white">
                    <h3 class="text-success">AutlineDrive Selfservice</h3>
                <form onSubmit={this.onsubmit}>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username *"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password *" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btn-success" />
                        </div>
                </form>

                </div>
                </div>
                </div>
                </React.Fragment>
         
        )
    }
}

export default Login;