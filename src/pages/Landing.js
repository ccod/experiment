import React from 'react'
import { Layout } from 'antd'
import Profile from 'containers/Profile'

const {
    Header, Footer, Content,
} = Layout

export default () => (
    <Layout>
        <Header>
            Header
        </Header>
        <Content>
            Content
            <Profile />
        </Content>
        <Footer>Footer</Footer>
    </Layout>
)