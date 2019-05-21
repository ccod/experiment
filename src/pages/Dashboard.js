import React from 'react'
import { Row, Col, List, Card, Avatar, Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import './Dashboard.css'

const columns = [{
    title: '',
    dataIndex: 'avatar',
    render: img => <Avatar shape="square" size="large" src={img} />
}, {
    title: 'Name',
    dataIndex: 'name'
}, {
    title: 'Current Rank',
    dataIndex: 'rank'
}, {
    title: 'Issue Date',
    dataIndex: 'created_at'
}, {
    title: 'Match Time',
    dataIndex: 'scheduledTime'
}]

const data = [{
    key: '1',
    avatar: 'https://static.starcraft2.com/starport/301eb418-e9db-4b39-8be9-49dd1297b372/portraits/6-29.jpg',
    name: 'Jinjo',
    rank: '5',
    created_at: '04/30/19 2pm',
    scheduledTime: '05/2/19 2pm'
}, {
    key: '2',
    avatar: 'https://static.starcraft2.com/starport/301eb418-e9db-4b39-8be9-49dd1297b372/portraits/6-29.jpg',
    name: 'Jinjo',
    rank: '5',
    created_at: '04/30/19 2pm',
    scheduledTime: '05/2/19 2pm'
}, {
    key: '3',
    avatar: 'https://static.starcraft2.com/starport/301eb418-e9db-4b39-8be9-49dd1297b372/portraits/6-29.jpg',
    name: 'Jinjo',
    rank: '5',
    created_at: '04/30/19 2pm',
    scheduledTime: '05/2/19 2pm'
}, {
    key: '4',
    avatar: 'https://static.starcraft2.com/starport/301eb418-e9db-4b39-8be9-49dd1297b372/portraits/6-29.jpg',
    name: 'Jinjo',
    rank: '5',
    created_at: '04/30/19 2pm',
    scheduledTime: '05/2/19 2pm'
}, {
    key: '5',
    avatar: 'https://static.starcraft2.com/starport/301eb418-e9db-4b39-8be9-49dd1297b372/portraits/6-29.jpg',
    name: 'Jinjo',
    rank: '5',
    created_at: '04/30/19 2pm',
    scheduledTime: '05/2/19 2pm'
}]

// shape the list of challenges as a table to save on space
export default () => (
    <>
        <Row>
            <Col span={6}>
                <Card>
                    <Row>
                        <Col span={6}>
                            <Avatar shape="square" size={64} src="https://static.starcraft2.com/starport/301eb418-e9db-4b39-8be9-49dd1297b372/portraits/6-29.jpg" />
                        </Col>
                        <Col span={18}>
                            <h3><strong>Deadalus</strong></h3>
                            <p><strong>Preferred Race:</strong> Terran</p>
                            <p><strong>League:</strong> PLATINUM</p>
                            <p><strong>Current "Settle the Beef" Rank:</strong> 12</p>
                            <a href="https://www.starcraft2.com/profile/1/1/1655091" target="_blank"><Button type="primary">SC2 Profile</Button></a>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        <Row>
            <Card>
                <Col span={12}>
                    <h3><strong>Received Challenges</strong></h3>
                    <Table columns={columns} dataSource={data} size="small" pagination={false} />
                </Col>
                <Col span={12}>
                    <h3><strong>Issued Challenges</strong></h3>
                    <Table columns={columns} dataSource={data} size="small" pagination={false} />
                </Col>
            </Card>
        </Row>
    </>
)