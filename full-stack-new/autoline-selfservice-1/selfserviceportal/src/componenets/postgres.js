import React from 'react';
import axios from 'axios';

class Postgres extends React.Component{
    constructor(){
        super();
    }


    render(){
        return(
            <form>
            Pack type <input type="text"></input>
            </form>
        )
    }
}

export default Postgres;