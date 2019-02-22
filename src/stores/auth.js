import { basicAction } from './util'

const [isAuthenticated, notAuthenticated] = [basicAction('is-authenticated'), basicAction('not-authenticated')]
const [login, logout, failedLogin] = [basicAction('login'), basicAction('logout'), basicAction('failed-login')]

const login = dispatch => () => {
    let token = window.location.hash.sub(1)

    if(token === '') {
        dispatch(failedLogin.act())
        history.replace('/')
        return
    }

    localStorage.setItem('jwtToken', token)
    dispatch(login.act())
    history.replace('/dashboard')
}

const checkAuth = dispatch => () => {
    let jwt = localStorage.getItem('jwtToken')
    jwt ? dispatch(isAuthenticated.act()) : dispatch(notAuthenticated.act())
}

const logout = dispatch => () => {
    localStorage.removeItem('jwtToken')
    dispatch(logout.act())
    history.replace('/')
}

const authed = (b, err) => ({ auth: b, error: err})
const defaultState = { auth: false, error: null} 
const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case isAuthenticated.type: return authed(true)
        case notAuthenticated.type: return authed(false)
        case login.type: return authed(true)
        case logout.type: return authed(false)
        case failedLogin.type: return authed(false, 'Failed to login')
        default: return defaultState
    }
}

export { reducer, logout, checkAuth, login }