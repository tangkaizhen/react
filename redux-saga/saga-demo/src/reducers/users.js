/**
 * user如果初始化为空的，则将之设置为null，不要设置为{}，否则容易在页面报错
 */
const initialState = {
  isFetching: false,
  error: null,
  user: null
};

const users = (state = initialState, action = {}) => {
    switch(action.type) {
      case "FETCH_USER_REQUEST":
        return {
          isFetching: true,
          error: null,
          user: null
        }
      case "FETCH_USER_SUCCEEDED":
        return {
          isFetching: false,
          error: null,
          user: action.user
        }
      default: return state;
    }
  }
  
  export default users;