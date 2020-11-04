import React from 'react'; 
import axios from 'axios'; 

class Products extends React.Component{
    constructor(){
        super()
        this.state= {
            productId: "",
            productName: "",
            productDescription: "",
            productURL: "",
            productPrice: "",
            category: ""
        }
        this.oninputChange = this.oninputChange.bind(this);
        this.onsumbit = this.onsumbit.bind(this);
    }
    oninputChange(event){
        event.preventDefault();
        console.log('input change function');
        var value = event.target.value;
        var name = event.target.name;

        this.setState({[name]:value})
    }
    onsumbit(event){
        event.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3019/api/addProduct', this.state).then(
            function(response){
                console.log(response);
            }
        )
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onsumbit}>
                productId: <input type="text" onChange={this.oninputChange} name="productId"></input><br></br><br></br>
                productName: <input type="text" onChange={this.oninputChange} name="productName"></input><br></br><br></br>
                productDescription: <input type="text" onChange={this.oninputChange} name="productDescription"></input><br></br><br></br>
                productURL: <input type="text" onChange={this.oninputChange} name="productURL"></input><br></br><br></br>
                productPrice: <input type="text" onChange={this.oninputChange} name="productPrice"></input><br></br><br></br>
                category: <input type="text" onChange={this.oninputChange} name="category"></input><br></br><br></br>

                <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default Products;

/*
productId:productId,
        productName:productName,
        productDescription:productDescription,
        productURL:productURL,
        productPrice:productPrice,
        category:category
*/