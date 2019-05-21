import React from 'react'
import { Route } from 'react-router-dom'
import history from 'utils/history'
import { Provider } from 'react-redux'
import configureStore from 'stores'
import { PrivateRoute } from 'components'

import Landing from 'pages/Landing'
import App from 'pages/App'
import Callback from 'pages/Callback'
import { ConnectedRouter } from 'connected-react-router';

let store = configureStore()

const Index = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <PrivateRoute exact path="/" component={Landing} />
                <PrivateRoute path="/dashboard" component={App} />
                <Route path='/callback' component={Callback} />
            </>
        </ConnectedRouter>
    </Provider>
)

export default Index