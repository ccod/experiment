import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from 'utils/history'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from 'stores'

import Landing from 'pages/Landing'
import Dashboard from 'pages/Dashboard'

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

const Index = () => (
    <Provider store={store}>
        <Router history={history(store)}>
            <>
                <Route exact path="/" component={Landing} />
                <Route path="/dashboard" component={Dashboard} />
            </>
        </Router>
    </Provider>
)

export default Index