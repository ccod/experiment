import React from 'react'
import { Button, Layout, Row, Col, Card } from 'antd'
import { Link } from 'react-router-dom'
import { Profile, PlayerList } from 'components'
import './Layout.css'

const {
    Header, Footer, Content, Sider
} = Layout

const RankList = () => (
    <>
        { Array(20).fill(null).map((x, idx) => <Col span={6} key={idx}><Card>Rank: {idx + 1}</Card></Col>) }
    </>

)


const PlayerRankAdmin = () => (
    <Row>
        <Col span={4}>
            <PlayerList />
        </Col>
        <Col span={20}><RankList /></Col>
    </Row>
)

export default () => (
    <Layout>
        <Row>
            <Col span={6}><h4>Team Gosu Build</h4></Col>
            <Col span={14} />
            <Col><Link to="/dashboard"><Button>Login</Button></Link></Col>
        </Row>
        <Content >
            <div className="content">
                Content
            </div>
        </Content>
        <Footer>
            <Row type="flex" justify="center">
                <p>Created by: Christopher Codringtion @ Cugnuphos LLC</p>
            </Row>

        </Footer>
    </Layout>
)