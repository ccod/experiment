import Client from 'utils/client'
import { observable, action, decorate } from 'mobx'

class PlayerStore {
    profile = null
    players = []
    error = null

    constructor () {
        this.http = new Client()
    }

    getPlayers = () => {

    }

    getProfile = () => {
        this.http.getProfile()
            .then(({data}) => { this.profile = data })
            .catch(err => { this.error = err })
    }
}

export default decorate(PlayerStore, {
    profile: observable,
    players: observable,
    error: observable,
    getPlayers: action,
    getProfile: action
})