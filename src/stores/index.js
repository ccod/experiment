import { combineReducers } from 'redux'
import { reducer as profile} from './profile'
import { reducer as player } from './player'
import { reducer as ui } from './ui'

export default combineReducers({ profile, player, ui })