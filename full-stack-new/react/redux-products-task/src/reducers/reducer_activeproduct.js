export default function(state=null,action){
    console.log('action', action);
    switch(action.type){
        case 'specific-product':
            return action.payload
    }
    return state;
}