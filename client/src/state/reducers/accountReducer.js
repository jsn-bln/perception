const initialState = {
    firstname: "", 
    lastname: "", 
    username:""
}

const userReducer = (state = initialState
    , action) => {
    switch(action.type){
        case "userdata":
            return {
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                username: action.payload.username
            };
        default:
            return state;
    }
}

export default userReducer;