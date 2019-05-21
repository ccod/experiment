import React, { Component } from 'react'
import { Row, Col, List } from 'antd'

export default class Ranking extends Component {
    render() {
        return (
            <Row>
                <List>
                    <List.Item>
                        <Col span={4}>
                            <p><div>avatar</div><div>name</div><div>ranking</div></p>
                        </Col>
                    </List.Item>
                </List>
            </Row>
        )
    }
}