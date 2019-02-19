import React from 'react'
import { Layout, Button } from 'antd'
import { Consumer } from 'utils/store'

import Client from 'utils/client'

const {
    Header, Footer, Content,
} = Layout

const Demo = props => (
    <Consumer>
        {context => <Button onClick={context.tap}>DemoButton</Button>}
    </Consumer>
)

class ProfileButton extends React.Component {
    constructor (props) {
        super(props)
        this.client = new Client()
    }

    render() {
        return <Button onClick={this.client.getProfile}>ProfileButton</Button>
    }
}

export default () => (
    <Layout>
        <Header>Header</Header>
        <Content>
            <ProfileButton />
            <Demo />
        </Content>
        <Footer>Footer</Footer>
    </Layout>
)