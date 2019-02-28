import React from 'react'
import { Button } from 'antd'

export default props => (
    <div>
        <p>This is a specific Challenge View</p>
        <Button onClick={() => console.log('Challenge ID: ', props.match.params.challengeId)}>Check ID</Button>
    </div>
)