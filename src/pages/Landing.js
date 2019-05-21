import React from 'react'
import { Button, Layout, Row, Col } from 'antd'
import './Layout.css'

const {
    Footer, Content
} = Layout

// const RankList = () => (
//     <>
//         { Array(20).fill(null).map((x, idx) => <Col span={6} key={idx}><Card>Rank: {idx + 1}</Card></Col>) }
//     </>
// )

// const PlayerRankAdmin = () => (
//     <Row>
//         <Col span={4}>
//             <PlayerList />
//         </Col>
//         <Col span={20}><RankList /></Col>
//     </Row>
// )

// needs to refer to host server login route
export default () => (
    <Layout>
        <Row>
            <Col span={6}><h4>Team Gosu Build</h4></Col>
            <Col span={14} />
            <Col><a href="http://localhost:8080/auth/login"><Button type="primary">Login</Button></a></Col>
        </Row>
        <Content >
            <div className="content">
                Content
            </div>
        </Content>
        <Footer>
            <Row type="flex" justify="center">
                <p>Created by: Christopher Codringtion @ Cognuphos LLC</p>
            </Row>

        </Footer>
    </Layout>
)
