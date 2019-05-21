import { basicAction } from 'stores/util'
import history from 'utils/history'

const [isAuthenticated, notAuthenticated] = [basicAction('is-authenticated'), basicAction('not-authenticated')]
const [login, logout, failedLogin] = [basicAction('login'), basicAction('logout'), basicAction('failed-login')]

// getUser || getProfile will trigger on dashboard page, if it doesn't succeed, it will automatically logout
const completeLogin = dispatch => () => {
    let token = window.location.hash.substring(1)

    if(token === '') {
        dispatch(failedLogin.act())
        history.push('/')
        return
    }

    localStorage.setItem('jwtToken', token)
    dispatch(login.act())
    history.push('/dashboard')
}

// dirty check, will validate properly on authenticated request
const checkAuth = dispatch => () => {
    let jwt = localStorage.getItem('jwtToken')
    jwt ? dispatch(isAuthenticated.act()) : dispatch(notAuthenticated.act())
}

const performLogout = dispatch => () => {
    localStorage.removeItem('jwtToken')
    dispatch(logout.act())
    history.push('/')
}

const defaultState = { value: false, error: null, isAdmin: false } 
const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case isAuthenticated.type: 
            return Object.assign({}, state, { value: true })
        case notAuthenticated.type: 
            return Object.assign({}, state, { value: false })
        case login.type: 
            return Object.assign({}, state, { value: true })
        case logout.type: 
            return Object.assign({}, state, { value: false })
        case failedLogin.type: 
            return Object.assign({}, state, { value: false, error: 'Failed to login' })
        default: return state
    }
}

export { reducer, performLogout, checkAuth, completeLogin }