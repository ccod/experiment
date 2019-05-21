import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeLogin } from 'stores/auth'

class Callback extends Component {
    componentDidMount() {
        this.props.completeLogin()
    }

    render() {
        return (<div>Loading, fetching data for first time login</div>)
    }
}

const mapDispatch = dispatch => ({
    completeLogin: completeLogin(dispatch)
})

export default connect(null, mapDispatch)(Callback)