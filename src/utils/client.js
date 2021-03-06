import axios from 'axios'

export default class Client {
    constructor () {
        this.http = axios.create({
            baseURL: 'http://localhost:8080',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')}
        })
    }
    

    getProfile = () => this.http.get('/auth/user')
    getPlayers = () => this.http.get('/player')
}