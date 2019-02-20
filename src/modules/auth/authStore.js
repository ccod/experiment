import history from 'utils/history'
import { observable, computed, action, decorate } from 'mobx'

// remember to use hooks like useContext(Consumer) 
class AuthStore {
    token = null
    login = ""

    constructor () {
        this.token = localStorage.getItem('jwtToken')
        this.login = process.env.REACT_APP_LOGIN_URL
    }

    setSession = () => {
        let tokenHash = window.location.hash.substr(1)

        if (tokenHash === "") {
            history.replaceState('/')
            return
        }

        localStorage.setItem('jwtToken', tokenHash)
        this.token = tokenHash
        history.replaceState('/dashboard')
    }

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
    logout: action
})