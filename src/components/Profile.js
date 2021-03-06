import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Avatar } from 'antd'
import './Profile.css'
import { connect } from 'react-redux'
import { fetchProfile } from 'stores/profile'

const menu = () => (
    <Menu className="header-menu">
        <Menu.Item key={0}>profile page</Menu.Item>
        <Menu.Item key={1}>second item</Menu.Item>
    </Menu>
)

class Profile extends Component {
    componentDidMount() {
        this.props.fetchProfile()
    }

    render() {
        let profile = this.props.profile
        return (
            <Dropdown overlay={menu} trigger={['click']}>
                <div className="header-profile">
                    <Avatar size="large" shape="square" src={ profile && profile.avatarUrl } />
                    <h3>{ profile && profile.displayName } <Icon type="down" /></h3>
                </div>
            </Dropdown>
        )
    }
}

const mapState = state => ({
    profile: state.profile.value
})

const mapDispatch = dispatch => ({
    fetchProfile: fetchProfile(dispatch)
})

export default connect(mapState, mapDispatch)(Profile)