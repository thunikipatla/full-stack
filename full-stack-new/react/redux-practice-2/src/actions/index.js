export function selectbook(book){
    console.log('selected book', book);
    return{
        type: 'specific-book',
        payload: book
    }
}

// export function selectbook(book){
//     console.log('selected book', book);
//     return {
//         type: 'SPECIFIC-BOOK',
//          payload: book
//     }
// }