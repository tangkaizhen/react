import { takeEvery, put ,delay,call,all} from 'redux-saga/effects';

import { INCREMENT_ASYNC } from '../constants/counter';
import axios from 'axios';

function* incrementAsync() {
    /**
     * 像执行同步的一样执行异步
     */
    // 延迟两秒执行
    // 注意call主要用来执行异步
  yield delay(2000);
  /**
   * 触发一个action，put主要是用于同步
   */
  yield put({ type: 'INCREMENT' })
}

function* fetchUser() {
  const user = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
  yield put({type: "FETCH_USER_SUCCEEDED", user: user});
}

function* watchIncrementAsync() {
  // 主要是用来监听INCREMENT_ASYNC，当触发了INCREMENT_ASYNC，就会执行incrementAsync生成器
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

function* watchFetchUser() {
  yield takeEvery('FETCH_USER_REQUEST', fetchUser);
}

export default function* rootSage() {
  yield all([
    watchIncrementAsync(),
    watchFetchUser()
  ]);
}