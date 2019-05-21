import { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from 'stores/auth'

class AuthCheck extends Component {
    componentWillMount() {
        this.props.checkAuth()
    }

    render() {
        return this.props.children
    }
}

const mapDispatch = dispatch => ({
    checkAuth: checkAuth(dispatch)
})

export default connect(null, mapDispatch)(AuthCheck)