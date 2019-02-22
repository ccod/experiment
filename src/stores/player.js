import { asyncActions } from './util'
import Client from 'utils/client'

const [playersR, playersS, playersE] = asyncActions('players')
const fetchPlayers = dispatch => () => {
    let http = new Client()
    dispatch(playersR.act())
    return http.getPlayers()
        .then(({data}) => dispatch(playersS.act(data)))
        .catch(err => dispatch(playersE.act(err)))
}

const defaultState = {loading: false, value: [], error: null}
const reducer = (state = defaultState, { type, payload }) => {
    switch(type) {
        case playersR.type:
            return Object.assign({}, state, { loading: true, error: null})
        case playersS.type:
            console.log('Players State: ', state)
            return Object.assign({}, state, { loading: false, value: payload, error: null})
        case playersE.type:
            return Object.assign({}, state, { loading: false, value: payload, error: true})
        default: return state
    } 
} 

export { fetchPlayers, reducer }