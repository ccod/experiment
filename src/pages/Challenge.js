import React, { Component } from 'react'
import { Row, Col, List } from 'antd'

const opponentColumns = [{
    name: '',
    dataIndex: 'avatar',
}, {
    name: 'Name',
    dataIndex: 'name'
}, {
    name: 'Rank',
    dataIndex: 'rank'
}, {
    name: 'actions',
    dataIndex: 'key',
    render: (text, record) => <p>foobar</p>
}]

const opponentData = [{
    key: '1',
    avatar: '',
    name: '',
    profile: '',

}]

export default class Challenge extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col span={14}>
                        <List>
                            <List.Item>
                                <div>Avatar</div>
                                <div>Name</div>
                                <div>Rank</div>
                                <div>Issue Challenge</div>
                                <div>View Profile</div>
                            </List.Item>
                        </List>
                    </Col>
                </Row>
                <Row>
                    <Col span={14}>
                        <h4><strong>Past Challenges</strong></h4>
                        <List>
                            <List.Item>
                                <div><strong>Challenged:</strong> Pastry</div>
                                <div><strong>Verdict:</strong>Success</div>
                            </List.Item>
                        </List>
                    </Col>
                </Row>
            </>
        )
    }
}