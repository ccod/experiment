import React, { Component } from 'react'
import { List, Avatar } from 'antd'
import './PlayerList.css'

const Item = ({ player }) => (
    <div className="list-player">
        <Avatar shape="square" src={ player.avatarUrl } />
        <h3>{ player.displayName }</h3>
    </div>
)

export default class ProfileList extends Component {
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