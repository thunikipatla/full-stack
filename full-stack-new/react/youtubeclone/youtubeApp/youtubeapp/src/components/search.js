import React from 'react';

class Search extends React.Component{
    constructor(){
        super();
        this.state={
            term: null
        }
        this.onchange = this.onchange.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
    }

onchange(event){
    event.preventDefault();
    var searchinput = event.target.value;
    this.setState({term:searchinput})
    // console.log(searchinput);
}

onsubmit(event){
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onsearchTerm(this.state.term);
}
    

    render(){
        return(
            
            <form>
                <input type="text" name="searchterm" onChange={this.onchange}></input>
                <button onClick={this.onsubmit}>Submit</button>
            </form>
        )
    }
}

export default Search;