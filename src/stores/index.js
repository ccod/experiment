import { combineReducers } from 'redux'
import { reducer as profile} from './profile'

console.log('reducer: ', profile)
export default combineReducers({ profile })