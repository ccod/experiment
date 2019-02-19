import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from 'utils/history'
import { Provider } from 'utils/store'

import Landing from 'pages/Landing'

const Dashboard = () => (
    <div>Hello from Dashboard</div>
)

const Index = () => (
    <Router history={history}>
        <Provider value={{tap: () => console.log('hello from provider')}}>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
        </Provider>
    </Router>
)

export default Index