import { combineReducers } from 'redux';
import counter from './count';
import user from './user';
import user_email from './user_email';
// 注意函数也是个class,其导出的时候可以使用export default
const rootReducer = combineReducers({
  counter,
  user,
  user_email
});

export default rootReducer;