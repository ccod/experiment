import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Avatar } from 'antd'

const menu = () => (
    <Menu>
        <Menu.Item key={0}>first item</Menu.Item>
        <Menu.Item key={1}>second item</Menu.Item>
    </Menu>
)

export default class Profile extends Component {
    componentDidMount() {
        this.props.fetchProfile()
    }

    render() {
        let profile = this.props.profile
        return (
            <Dropdown overlay={menu} trigger={['click']}>
                <div>
                    <Avatar shape="square" src={ profile && profile.avatarUrl } />
                    <h3>{ profile && profile.displayName } <Icon type="down" /></h3>
                </div>
            </Dropdown>
        )
    }
}