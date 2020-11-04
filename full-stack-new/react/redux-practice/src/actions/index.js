export function selectbook(book){
    console.log('selected book', book);
    return {
        type: 'specific-book',
        payload: book

    }
}