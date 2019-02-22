import { connect } from 'react-redux'
import { fetchPlayers } from 'stores/player'
import PlayerList from 'components/PlayerList'

const mapState = state => ({
    players: state.player.value
})

const mapDispatch = dispatch => ({
    fetchPlayers: fetchPlayers(dispatch)
})

export default connect(mapState, mapDispatch)(PlayerList)