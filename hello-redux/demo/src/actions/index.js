import * as types from '../constants';
import axios from 'axios';
export const increase=()=>{
    // 这里就可以写异步函数了，比如fetch
    return dispatch=>{
        setTimeout(()=>{
            dispatch({
                type:types.INCREASE
            })
        },3000)
    }
}

export const get_user=()=>{
    return dispatch=>{
        
        axios.get("https://randomuser.me/api/")
            .then(res=>{
                dispatch(get_user_success(res.data.results[0]))
            })
            .catch(error=>{
                console.log(error)
            })
    }
}

export const get_user_success=(user)=>{
    return{
        type:'user_success',
        user
    }
}
export const get_user_start=()=>{
    return{
        type:'get_user_start',
    }
}