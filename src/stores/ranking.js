import { asyncActions } from './util'
import Client from 'utils/client'

const [fetchRankingsR, fetchRankingsS, fetchRankingsE] = asyncActions('fetch-rankings')
const [createRankingR, createRankingS, createRankingE] = asyncActions('create-ranking')
const [promoteRankingR, promoteRankingS, promoteRankingE] = asyncActions('promote-ranking')

const fetchRanking = dispatch => () => {
    let http = new Client()
    dispatch(Ranking.act())
    return http.getRanking()
        .then(({data}) => dispatch(Ranking.act(data)))
        .catch(err => dispatch(Ranking.act(err)))
}

const getRanking = (state, profileId) => {
    return state.rankings.value.find(r => r.profileId === profileId)
}

const createRanking = dispatch => () => {
    let http = new Client()
    dispatch(Ranking.act())
    return http.getRanking()
        .then(({data}) => dispatch(createRankingS.act(data)))
        .catch(err => dispatch(createRankingE.act(err)))
}

const promoteRanking = dispatch => () => {
    let http = new Client()
    dispatch(promoteRankingR.act())
    return http.getRanking()
        .then(({data}) => dispatch(promoteRankingS.act(data)))
        .catch(err => dispatch(promoteRankingE.act(err)))
}

const defaultState = { loading: false, value: [], error: false }
const reducer = (state = defaultState, { type, payload }) => {
    switch(type) {
        case fetchRankingsR.type:
            return Object.assign({}, state, { loading: true })
        case fetchRankingsS.type:
            return Object.assign({}, state, { loading: false })
        case fetchRankingsE.type:
            return Object.assign({}, state, { loading: false, error: true })

        case createRankingR.type:
            return Object.assign({}, state, { loading: true })
        case createRankingS.type:
            return Object.assign({}, state, { loading: false })
        case createRankingE.type:
            return Object.assign({}, state, { loading: false, error: true })

        case promoteRankingR.type:
            return Object.assign({}, state, { loading: true })
        case promoteRankingS.type:
            return Object.assign({}, state, { loading: false })
        case promoteRankingE.type:
            return Object.assign({}, state, { loading: false, error: true })

       default: return defaultState
    }
}

export { reducer, fetchRanking, getRanking, createRanking, promoteRanking }