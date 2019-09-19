var initialState={
    isFetching: false,
    error: null,
    user: {}
}
export default (state =initialState, action) => {
    if(action.type=='user_success'){
        return action.user
    }if(action.type=='user_sget_user_startuccess'){
        return{
            isFetching: true,
            error: null,
            user: {}
        }
    }else{
        return state
    }
}

