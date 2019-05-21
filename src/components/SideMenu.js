import React from 'react'
import { Icon, Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { pickMenuKey } from 'stores/ui';

const SubMenu = Menu.SubMenu

const SideMenu = props => (
    <Layout.Sider 
        theme="light"
        trigger={null}
        collapsible
        collapsed={props.collapsed}
    >
        <Menu 
            style={{'marginTop':'60px'}} 
            theme="light" 
            mode="inline" 
            defaultOpenKeys={['sub1']}
            selectedKeys={props.selectedKey}
        >
            <Menu.Item key="1">
                <Link to="/dashboard">
                    <Icon type="dashboard" />
                    <span>dashboard</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/dashboard/challenge">
                    <Icon type="calendar" />
                    <span>challenge</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/dashboard/ranking">
                    <Icon type="rise" />
                    <span>rankings</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to="/dashboard/history">
                    <Icon type="bars" />
                    <span>history</span>
                </Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="setting" /><span>Admin</span></span>}>
                <Menu.Item key="5">
                    <Link to="/dashboard/admin/ranking/edit">
                        <span>Edit Rankings</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to="/dashboard/admin/challenges">
                        <span>Adjudicate Challenges</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link to="/dashboard/admin/edit">
                        <span>Edit Admin</span>
                    </Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    </Layout.Sider>
)

const mapState = state => ({
    collapsed: state.ui.sideMenu,
    selectedKey: pickMenuKey(state.router.location.pathname)
})

export default connect(mapState)(SideMenu)