import { asyncActions } from './util'
import Client from 'utils/client'

const [profileR, profileS, profileE] = asyncActions('player')

const fetchProfile = dispatch => () => {
    let http = new Client()
    dispatch(profileR.act())
    return http.getProfile()
        .then(({data}) => dispatch(profileS.act(data)))
        .catch(({data}) => dispatch(profileE.act(data)))
}

const defaultState = {loading: false, value: null, error: null}
const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case profileR.type:
            return Object.assign({}, state, {loading: true})
        case profileS.type:
            return Object.assign({}, state, {loading: false, value: action.payload, error: null})
        case profileE.type:
            return Object.assign({}, state, {loading: false, value: action.payload, error: true})
        default: return defaultState
    }
}

export { fetchProfile, reducer }