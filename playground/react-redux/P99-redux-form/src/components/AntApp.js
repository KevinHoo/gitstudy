/**
 * Created by kevhu on 2017/7/14.
 */
import React from 'react'
import './AntApp.css'
import { Layout, Menu, Breadcrumb, Row, Col, Icon, Avatar } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

const AntApp = () => (
    <Layout className="layout">
        <Header>
            <Col span={3}>
                <div className="logo" />
            </Col>
            <Col span={19}>
                <Menu mode="horizontal" theme="dark" style={{lineHeight: '64px'}} defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">商业化工具</Menu.Item>
                    <Menu.Item key="2">商业化工具</Menu.Item>
                    <Menu.Item key="3">商业化工具</Menu.Item>
                    <Menu.Item key="4">商业化工具</Menu.Item>
                    <Menu.Item key="5">商业化工具</Menu.Item>
                    <Menu.Item key="6">商业化工具</Menu.Item>
                    <Menu.Item key="7">商业化工具</Menu.Item>
                    <Menu.Item key="8">商业化工具</Menu.Item>
                    <Menu.Item key="9">商业化工具</Menu.Item>
                    <Menu.Item key="10">商业化工具</Menu.Item>
                </Menu>
            </Col>
            <Col span={2} style={{textAlign:"right"}}><Avatar icon="user" style={{marginTop:"16px"}}/></Col>
        </Header>
        <Content style={{padding: '0 50px'}}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    Content
                </Content>
            </Layout>
        </Content>
        <Footer style={{ textAlign: 'center'}}>
            Ant Design @2017 Created by Ant UED
        </Footer>
    </Layout>
)

export default AntApp