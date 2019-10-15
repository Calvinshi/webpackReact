// original react state struture but not react's state 
const tiger = {
    count: 1000
}

const increase = {
    type : "plus"
}

const decreasee = {
    type : "subtract"
}

const reducer = (state = tiger, action )=>{
    switch (action.type) {
        case "plus":
            state.count += 100;
            return Object.assign({},state); //must return new one ,then page will refresh 
            
        case "subtract":
            state.count -= 100;
            return Object.assign({},state);
            
        default:
            return state;
    }
}
export default reducer;