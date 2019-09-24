const tiger = 1000

const increase = {
    type : "plus"
}

const decreasee = {
    type : "subtract"
}

const reducer = (state = tiger, action )=>{
    switch (action.type) {
        case "plus":
            return state += 100;
            break;
        case "subtract":
            return state -= 100;

        default:
            return state;
    }
}
export default reducer;