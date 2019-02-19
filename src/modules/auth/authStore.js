import history from 'utils/history'
import { observable, computed, action, decorate } from 'mobx'

// remember to use hooks like useContext(Consumer) 
class AuthStore {
    token = localStorage.getItem('jwtToken')
    login = process.env.REACT_APP_LOGIN_URL

    setSession = () => {
        let token = window.location.hash.substr(1)

        if (token === "") {
            history.replaceState('/')
            return
        }

        localStorage.setItem('jwtToken', token)
        this.token = token
        history.replaceState('/dashboard')
    }

    isAuthenticated = () => !!this.token

    logout = () => {
        this.token = null
        localStorage.removeItem('jwtToken')
        history.replace('/')
    }
}

export default decorate(AuthStore, {
    token: observable,
    login: observable,
    setSession: action,
    isAuthenticated: computed,
    logout: action
})