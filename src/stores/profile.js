import { asyncActions } from './util'
import Client from 'utils/client'

// TODO will change this to user a bit later
const [profileR, profileS, profileE] = asyncActions('player')

// TODO: if there is an error retrieving user, 
// it should log you out and send you to the landing page...
// probably with a note describing the error
const fetchProfile = dispatch => () => {
    let http = new Client()
    dispatch(profileR.act())
    return http.getProfile()
        .then(({data}) => dispatch(profileS.act(data)))
        .catch(({data}) => dispatch(profileE.act(data)))
}

const defaultState = {loading: false, value: null, error: null}
const reducer = (state = defaultState, { type, payload }) => {
    switch(type) {
        case profileR.type:
            return Object.assign({}, state, {loading: true, error: null})
        case profileS.type:
            console.log('State: ', state)
            return Object.assign({}, state, {loading: false, value: payload, error: null})
        case profileE.type:
            return Object.assign({}, state, {loading: false, value: payload, error: true})
        default: return state 
    }
}

export { fetchProfile, reducer }