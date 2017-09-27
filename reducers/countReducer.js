export default( state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            console.log(action.text);
            return state + 1;
        case 'DECREMENT':
            console.log(action.text);
            return state - 1;
        default:
            console.log('default');
            return state
    }
}