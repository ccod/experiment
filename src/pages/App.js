import React, { Component } from 'react'
import { Layout, Row } from 'antd'
import { Route } from 'react-router-dom'
import './Layout.css'

import { SideMenu, TopBar } from 'components'
import Dashboard from './Dashboard'
import { fetchProfile } from 'stores/profile'
import { connect } from 'react-redux';

const {
    Footer, Content
} = Layout

const Stub = content => () => <div>This is stubbed content named: {content}</div>

class App extends Component {
    componentDidMount() {
        this.props.fetchProfile()
    }

    render() {
        return (
            <Layout>
                <SideMenu />
                <Layout>
                    <TopBar />
                    <Content >
                        <div className="content">
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route path="/dashboard/challenge" component={Stub('Challenge')} />
                            <Route path="/dashboard/ranking" component={Stub('Ranking')} />
                            <Route path="/dashboard/history" component={Stub('History')} />
                            <Route path="/dashboard/admin/ranking/edit" component={Stub('Admin Ranking')} />
                            <Route path="/dashboard/admin/challenges" component={Stub('Admin Challenge')} />
                            <Route path="/dashboard/admin/edit" component={Stub('Admin Edit')} />
                        </div>
                    </Content>
                    <Footer>
                        <Row type="flex" justify="center">
                            <p>Created by: Christopher Codringtion @ Cognuphos LLC</p>
                        </Row>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

const mapDispatch = dispatch => ({
    fetchProfile: fetchProfile(dispatch)
})

export default connect(null, mapDispatch)(App)