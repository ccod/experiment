import React, { Component } from 'react'
import { Row, Col, List, Card } from 'antd'

export default class History extends Component {
    render() {
        return (
            <Card>
               <div>match type</div> 
               <div>player 1</div>
               <div>player 2</div>
               <div>verdict</div>
               <div>timestamp</div>
            </Card>
        )
    }
}