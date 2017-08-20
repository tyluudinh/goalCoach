/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */
 import {combineReducers} from 'redux'
 import goals from './goals'
 import user from './user'
 // combine reducers
 export default combineReducers({
     user,
     goals
 })