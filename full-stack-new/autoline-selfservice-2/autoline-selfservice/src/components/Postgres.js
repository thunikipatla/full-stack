import React from 'react';
import axios from 'axios';
import { createHashHistory } from 'history'
export const history = createHashHistory()

class PostgresPack extends React.Component{
    constructor(){
        super();
        this.state={
            network: '"Congo R&D"',
            data_center: "",
            env: "",
            puppet_branch: "preprod_2016",
            description: "",
            rpm_type: "src",
            service_name: "",
            system_type: "",
            pack_type: "",
            branch: ""
        }
        this.oninputchange = this.oninputchange.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
    }

    oninputchange(event){
        event.preventDefault();
        var name = event.target.name;
        var value = event.target.value;
        this.setState({[name]:value})
    }
    onsubmit(event){
        event.preventDefault();
        // console.log(this.state);
        // console.log(this.state.data_center);
        history.push('/Notify');
        axios.get('http://c05drddrv520.dslab.ad.adp.com/deploy-drive-with-git',{ params: this.state }).then(
            (response)=>{
                console.log('pack creation request has been sent you will get an email')
            }
        )
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
        <div class="row">
            <div class="col-sm-4">

            </div>
            <div class="col-sm-4 form-group">
            <form onSubmit={this.onsubmit}>
            data_center: <select onChange={this.oninputchange} name="data_center" class="form-control">
                <option>Select a value</option>
                <option value="GBH">GBH</option>
                <option value="GBB">GBB</option>
            </select>
            env: 
            <select class="form-control" onChange={this.oninputchange} name="env" class="form-control">
                <option>Select a value</option>
                <option value="dev">dev</option>
                <option value="stage">stage</option>
            </select>
            
            description: <input type="text" onChange={this.oninputchange} class="form-control" placeholder="Provide the Description" name="description"></input>
            
            service_name: <input type="text" onChange={this.oninputchange} class="form-control" placeholder="Enter the service name Eg: DRIVEDEV or DRIVEDEV_IA" name="service_name"></input>
            system_type:
            <select class="form-control" onChange={this.oninputchange} name="system_type" class="form-control">
                <option>Select a value</option>
                <option value="NEPTUNE1">NEPTUNE1</option>
                <option value="NEPTUNE2">NEPTUNE2</option>
                <option value="LITE">LITE</option>

            </select>
            pack_type: 
            <select class="form-control" onChange={this.oninputchange} name="pack_type" class="form-control">
                <option>Select a value</option>
                <option value="live">live</option>
                <option value="uat">uat</option>
            </select>
            branch: <input type="text" onChange={this.oninputchange} class="form-control" placeholder="Enter the git branch name Eg: master" name="branch"></input><br></br>

                   <button class="btn btn-success">Create pack</button>
           </form>

            </div>

        </div>

        </React.Fragment>

        
        
      )  
    }
}
export default PostgresPack;