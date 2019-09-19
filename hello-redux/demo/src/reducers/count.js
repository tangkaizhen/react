const initialState =0

export default (state = initialState, {type,num}) => {
    if(type==='INCREASE'){
        return state
    }else if(type==='REDUCE'){
        return state-1
    }else {
        return state
    }
}
