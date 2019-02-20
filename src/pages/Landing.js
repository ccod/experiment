import React from 'react'
import { Layout, Button } from 'antd'
import { Consumer } from 'utils/store'
import ProfileLabel from 'modules/auth/containers/ProfileLabel'

const {
    Header, Footer, Content,
} = Layout

const Demo = props => (
    <Consumer>
        {context => <Button onClick={context.tap}>DemoButton</Button>}
    </Consumer>
)

export default () => (
    <Layout>
        <Header>
            <ProfileLabel />
        </Header>
        <Content>
            <Demo />
        </Content>
        <Footer>Footer</Footer>
    </Layout>
)