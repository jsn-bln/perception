export const userLogin = (isLoggedIn) =>{
    return (dispatch) => {
        dispatch({
            type: "isLoggedIn",
            payload: isLoggedIn
        })
    }
}

export const userData = (userdata) => {
    return(dispatch) => {
        dispatch({
            type: "userdata",
            payload: {
                firstname: userdata.firstname,
                lastname: userdata.lastname,
                username: userdata.username
            }
        })
    }
}