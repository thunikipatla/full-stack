import React from 'react';
import axios from 'axios';
import Notify from './Notify';
import { withRouter } from "react-router-dom";


class Header extends React.Component{
    history;
    constructor(){
        super();
        this.state={
            data: ''
        }
        this.onformsubmit = this.onformsubmit.bind(this);
    }
    
    onformsubmit(event){
        event.preventDefault();
        console.log('calling pack creation API');
        this.props.history.push('/Notify');
        
        // alert('you will get an email after completion of pack creation');

        axios.get('http://c05drddrv520.dslab.ad.adp.com/deploy-drive-with-git?network=%22Congo+R%26D%22&data_center=GBH&env=dev&puppet_branch=preprod_2016&description=test-console&rpm_type=src&service_name=DriveMT&system_type=NEPTUNE2&pack_type=live&branch=master').then(
            (response)=>{
                console.log(response);
                
                this.setState({data:response.data})
                console.log(this.state.data);
                

            }
        )
    }

    
    render(){
        return(
            <React.Fragment>

                <form onSubmit={this.onformsubmit}>
                    <input type="text" name="create-pack"></input>
                    <button>Submit</button>
                </form>



            </React.Fragment>
        )
    }
}

export default Header;
