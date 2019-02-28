import React, { Component } from 'react'
import { Select } from 'antd'
import { connect } from 'react-redux'
import { fetchPlayers } from 'stores/player'
import { selectPlayer, clearPlayer } from 'stores/ui'

const Option = Select.Option

class PlayerSelect extends Component {
    componentDidMount() {
        this.props.fetchPlayers()
    }

    componentWillUnmount() {
        this.props.clearPlayer()
    }

    render() {
        const { selectPlayer, selectedPlayer, players } = this.props

        return (
            <Select
                showSearch
                style={{width: '200px'}}
                placeholder="Select a player"
                optionFilterProp="children"
                onChange={selectPlayer}
                value={selectedPlayer ? selectedPlayer.displayName : undefined}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                { players.map( (player, idx) => (
                    <Option value={player}>{player.displayName}</Option>
                ))}
            </Select>
        )
    }
}

const mapState = state => ({
    players: state.player.value,
    selectedPlayer: state.ui.selectPlayer
})

const mapDispatch = dispatch => ({
    fetchPlayers: fetchPlayers(dispatch),
    selectPlayer: player => dispatch(selectPlayer.act(player)),
    clearPlayer: () => dispatch(clearPlayer.act())
})

export default connect(mapState, mapDispatch)(PlayerSelect)