import React from 'react';

class Search extends React.Component{
    constructor(){
        super();
        this.state={
            term:null,
        }

        this.onchange = this.onchange.bind(this);
        this.onsubmit = this.onsubmit.bind(this);

    }

    onchange(event){
        event.preventDefault();
       var searchvalue = event.target.value;
        this.setState({term:searchvalue})
    }

    onsubmit(event){
        event.preventDefault();
        console.log(this.state.term);
        // {this.props.searchterm(this.state.term)}
    }



    render(){
        return (
            <div>
                <form>
                    <input type="text" onChange={this.onchange}></input>
                    <button onSubmit={this.onsubmit}>Submit</button>
                </form>
            </div>           
        )
    }
}

export default Search;