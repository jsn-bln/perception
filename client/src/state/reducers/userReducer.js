const loginReducer = (state = false, action) => {
    switch(action.type){
        case "isLoggedIn":
            return !state;
        default:
            return state;
    }
}

export default loginReducer