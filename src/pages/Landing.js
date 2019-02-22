import React from 'react'
import { Layout, Row, Col, Card } from 'antd'
import { Profile, PlayerList } from 'containers'

const {
    Header, Footer, Content,
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
        <Header>
            <Profile />
        </Header>
        <Content>
            <PlayerRankAdmin />
        </Content>
        <Footer>
            <Row type="flex" justify="center">
                <p>Created by: Christopher Codringtion @ Cugnuphos LLC</p>
            </Row>

        </Footer>
    </Layout>
)