import { reducer as auth} from './auth'
import { reducer as profile} from './profile'
import { reducer as player } from './player'
import { reducer as ui } from './ui'
import { connectRouter } from 'connected-react-router';

import history from 'utils/history'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

const checkAuth = () => {
    let jwt = localStorage.getItem('jwtToken')
    if(jwt) {
        return { auth: { value: true }}
    }

    return {}
}

// configureStore
export default () => {
    const store = createStore(
        combineReducers({ router: connectRouter(history), auth, profile, player, ui }),
        checkAuth(),
        compose(
            applyMiddleware(thunk, routerMiddleware(history)),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    )

    return store
}