import React from 'react'
import { Dropdown, Menu, Icon } from 'antd'

const menu = (
    <Menu>
        <Menu.Item key="0">First item</Menu.Item>
        <Menu.Item key="1">Second item</Menu.Item>
    </Menu>
)

export default props => (
    <Dropdown overlay={menu} trigger={['click']}>
        Profile <Icon type="down" />
    </Dropdown>
)