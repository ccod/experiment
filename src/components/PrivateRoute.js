import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { withinDashboard } from 'stores/ui'

// think about a name that is a little less misleading, as I will use this for the inverse direction (from Landing to Dashboard if authenticated)
const PrivateRoute = ({ auth, inDashboard, component: Component, ...rest}) => (
    <Route {...rest} render={ props => {
        if(props.location.pathname === '/' && auth) {
            return (<Redirect to={{ pathname: '/dashboard', state: {from: '/'}}} />) 
        }
        if(inDashboard && !auth) {
            return (<Redirect to={{ pathname: '/', state: {from: props.location}}} />)
        }
        return (<Component {...props} />)
    }} />
)

const mapState = state => ({
    inDashboard: withinDashboard(state.router.location.pathname),
    auth: state.auth.value
})

export default connect(mapState)(PrivateRoute)