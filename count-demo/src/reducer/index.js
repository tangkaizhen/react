// 初始化数据
import {count} from './initData'
// 各种方法
import {add} from './fn'

import createReducer from './createReducer'

export default  createReducer(count,{'add':add})