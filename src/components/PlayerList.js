import React, { Component } from 'react'
import { List, Avatar } from 'antd'
import './PlayerList.css'
import { connect } from 'react-redux'
import { fetchPlayers } from 'stores/player'

const Item = ({ player }) => (
    <div className="list-player">
        <Avatar shape="square" src={ player.avatarUrl } />
        <h3>{ player.displayName }</h3>
    </div>
)

class ProfileList extends Component {
    componentDidMount() {
        this.props.fetchPlayers()
    }

    render() {
        let players = this.props.players
        return (
            <List 
                dataSource={players} 
                renderItem={item => (<List.Item><Item player={item} /></List.Item>)} 
            />
        )
    }
}

const mapState = state => ({
    players: state.player.value
})

const mapDispatch = dispatch => ({
    fetchPlayers: fetchPlayers(dispatch)
})

export default connect(mapState, mapDispatch)(ProfileList)