export function selectproduct(product){
    console.log('selected product', product);
    return{
        type: "specific-product",
        payload: product

    }
}