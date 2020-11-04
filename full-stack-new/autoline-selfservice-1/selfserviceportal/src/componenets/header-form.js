import React from 'react';
import axios from 'axios';

class HeaderForm extends React.Component{
    constructor(){
        super();

        this.postgrespack = this.postgrespack.bind(this);
        this.oraclepack = this.oraclepack.bind(this);


    }
    postgrespack(event){
        console.log('postgres pack is calling');
        this.props.history.push('/Postgres')
    }
    oraclepack(event){
        console.log('oracle pack is calling');
    }
    render(){
        return(
            <React.Fragment>

                <div class="row">
                    <div class="col-sm-4">
                    <button onClick={this.postgrespack} class="btn btn-success">create pack from postgres</button>
                    </div>
                    <div class="col-sm-4">
                    <button onClick={this.oraclepack} class="btn btn-success">create pack from Oracle</button>
                    </div>
                    <div class="col-sm-4">
                    <button onClick={this.oraclepack} class="btn btn-success">Update the pack</button>
                    </div>

                </div>

                
                

            </React.Fragment>
        )
    }
}
export default HeaderForm;