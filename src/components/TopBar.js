import React from 'react'
import { Row, Col, Icon  } from 'antd'
import { connect } from 'react-redux'
import { withinDashboard, toggleMenu } from 'stores/ui'

const TopBar = props => {
    if(props.inDashboard) {
        return (
            <Row>
                <Col span={2}><Icon onClick={props.toggle} height="2em" type={ props.isClosed ? "menu-unfold" : "menu-fold" } /></Col>
                <Col span={6}><h3>Team Gosu Build</h3></Col>
                <Col offset={12} span={4}>Profile Piece</Col>
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
    inDashboard: withinDashboard(state.ui),
    isClosed: state.ui.sideMenu
})

const mapDispatch = dispatch => ({
    toggle: () => dispatch(toggleMenu.act())
})

export default connect(mapState, mapDispatch)(TopBar)