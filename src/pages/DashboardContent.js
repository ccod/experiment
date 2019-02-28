import React from 'react'
import { Row, Col, List } from 'antd'
import { Link } from 'react-router-dom'

export default () => (
    <Row>
        <Col span={12}>
            <p>Current Rank: 12</p>
            <p>Received Challenges</p>
            <List>
                <List.Item><Link to="/dashboard/challenge/34">Jinjo</Link></List.Item>
            </List>
        </Col>
        <Col span={12}>
            <p>Issued Challenges</p>
            <List>
                <List.Item>Pastry</List.Item>
            </List>
        </Col>
    </Row>
)