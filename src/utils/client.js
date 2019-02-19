import axios from 'axios'

export default class Client {
    constructor () {
        this.http = axios.create({
            baseURL: 'http://localhost:8080',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')}
        })
    }
    
    getProfile = () => {
        this.http.get('/player')
            .then(({data}) => console.log(data))
            .catch(err => console.log(err))
    }
}