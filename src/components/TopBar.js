import React from 'react'
import { Row, Col, Icon, Menu, Dropdown, Button } from 'antd'
import { connect } from 'react-redux'
import { withinDashboard, toggleMenu } from 'stores/ui'
import { performLogout } from 'stores/auth'
import './TopBar.css' 

const TopBar = props => {
    if(props.inDashboard) {
        return (
            <Row className="topbar__background topbar__spacing">
                <Col span={2}><Icon className="topbar--icon__size" onClick={props.toggle} type={ props.isClosed ? "menu-unfold" : "menu-fold" } /></Col>
                <Col span={6}><h3><strong>Team Gosu Build</strong></h3></Col>
                <Col offset={12} span={4}><Button type="primary" onClick={props.logout}>Logout</Button></Col>
            </Row>

        )
    }
    return (
        <Row>
            <Col span={8}><h3>Team Gosu Build</h3></Col>
            <Col offset={12} span={4}>Login Piece</Col>
        </Row>
    )
}

const mapState = state => ({
    inDashboard: withinDashboard(state.router.location.pathname),
    isClosed: state.ui.sideMenu
})

const mapDispatch = dispatch => ({
    toggle: () => dispatch(toggleMenu.act()),
    logout: performLogout(dispatch)
})

export default connect(mapState, mapDispatch)(TopBar)