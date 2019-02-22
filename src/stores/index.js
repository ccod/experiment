import { combineReducers } from 'redux'
import { reducer as profile} from './profile'
import { reducer as player } from './player'

export default combineReducers({ profile, player })