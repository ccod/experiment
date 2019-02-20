import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from 'utils/history'
import { Provider, createStore } from 'utils/store'

import Landing from 'pages/Landing'

const Dashboard = () => (
    <div>Hello from Dashboard</div>
)

const Index = () => (
    <Router history={history}>
        <Provider value={createStore()}>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
        </Provider>
    </Router>
)

export default Index