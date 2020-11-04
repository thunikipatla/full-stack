import React from 'react';
// import axios from 'axios';
import { createHashHistory } from 'history'
export const history = createHashHistory()

class Header extends React.Component{
        constructor(){
            super();

        this.postgrespack = this.postgrespack.bind(this);
        this.oraclepack = this.oraclepack.bind(this);

        }

        postgrespack(event){
            event.preventDefault();
            console.log('Postgres pack creation called');
            // this.props.history.push('/PostgresPack')
            history.push('/PostgresPack')
        } 
        oraclepack(event){
            event.preventDefault();
            console.log('Oracle pack creation is called');
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

                {/* <div class="row">
                    <div class="col-sm-4">
                        <button onClick={this.postgrespack} class="btn btn-success">Create Pack with PostgreSQL DB</button>
                    </div>
                    <div class="col-sm-4">
                        <button onClick={this.oraclepack} class="btn btn-success">Create Pack with Oracle DB</button>
                    </div>
                    <div class="col-sm-4">
                    <button onClick={this.updatepack} class="btn btn-success">Update the pack</button>
                    </div>

                </div> */}
                <div class="row">
                    <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                        <h4 class="card-title">Create a pack with postgreSQL DB</h4>
                            {/* <p class="card-text">
                            By using this, you can able to create the pack with PostgreSQL DB 
                            </p> */}
                            
                            <button onClick={this.postgrespack} class="btn btn-success">Create Pack with PostgreSQL DB</button>
                        </div>
                    </div>

                    </div>

                    <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                        <h4 class="card-title">Create a pack with Oracle DB</h4>
                            {/* <p class="card-text">
                            By using this, you can able to create the pack with Oracle DB 
                            </p> */}
                            <button onClick={this.oraclepack} class="btn btn-success">Create Pack with Oracle DB</button>
                        </div>
                    </div>

                    </div>
                    <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                        <h4 class="card-title">Update the kcml on a pack</h4>
                            {/* <p class="card-text">
                            By using this, you can able to update the kcml on a pack.
                            </p> */}
                            <button onClick={this.oraclepack} class="btn btn-success">Update the kcml</button>
                        </div>
                    </div>

                    </div>

                </div>
                <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                        <h4 class="card-title">Create a Rev8 Pack</h4>
                            {/* <p class="card-text">
                            By using this, you can able to create the rev8 pack.
                            </p> */}
                            <button onClick={this.oraclepack} class="btn btn-success">Create a Rev8 pack</button>
                        </div>
                    </div>

                    </div>
                    <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                        <h4 class="card-title">Install apache and Browser client</h4>
                            <button onClick={this.oraclepack} class="btn btn-success">Install apache with BrowserClient</button>
                        </div>
                    </div>

                    </div>

                </div>

            </React.Fragment>

        )
    }
}

export default Header;