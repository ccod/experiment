import React from 'react'
import { Layout, Row, Col, Card } from 'antd'
import { Route, Link } from 'react-router-dom'
import './Layout.css'

import { SideMenu, TopBar, PlayerSelect } from 'components'

const {
    Header, Footer, Content
} = Layout

const [
    Dashboard,
    Challenge,
    Rankings,
    History,
    AdjudChallenge,
    EditAdmin
] = [
    'Dashboard',
    'Challenge',
    'Rankings',
    'History',
    'Adjudicate Challenges',
    'Edit Admin'
].map(s => () => <div>This is page {s}</div>)

const EditRankings = () => (
    <Card>
        <PlayerSelect />
    </Card>
)

export default props => (
    <Layout>
        <SideMenu />
        <Layout>
            <TopBar />
            <Content >
                <div className="content">
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route path="/dashboard/challenge" component={Challenge} />
                    <Route path="/dashboard/ranking" component={Rankings} />
                    <Route path="/dashboard/history" component={History} />
                    <Route path="/dashboard/admin/ranking/edit" component={EditRankings} />
                    <Route path="/dashboard/admin/challenges" component={AdjudChallenge} />
                    <Route path="/dashboard/admin/edit" component={EditAdmin} />
                </div>
            </Content>
            <Footer>
                <Row type="flex" justify="center">
                    <p>Created by: Christopher Codringtion @ Cugnuphos LLC</p>
                </Row>
            </Footer>
        </Layout>
    </Layout>
)