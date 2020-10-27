import React from 'react';
import { Layout, Menu, Skeleton, Badge, } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    PieChartOutlined,
    SettingOutlined,
    NotificationOutlined,
    BellOutlined,
    QuestionCircleOutlined,
} from '@ant-design/icons';
import AdminPublish from '../Admin-Publish/index'
import moment from 'moment';
import './index.scss';

const { Header, Sider, Content } = Layout;
const ANNOUNCEMENT = '公告：本网站诚招维护人，有意者联系178977641@qq.com';

export default class Admin extends React.Component {
    state = {
        collapsed: false,
        content: <AdminPublish />,
    };

    componentDidMount() {
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    onSelect = (e) => {
        if (e.key === '1') {
            this.setState({
                content: <AdminPublish />
            })
        } else if (e.key === '2') {
            this.setState({
                content: null
            })
        } else if (e.key === '3') {
            this.setState({
                content: null
            })
        }
    }

    render() {
        const { content } = this.state;
        return (
            <Layout className="home-wrap">
                <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">Homework Management</div>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} onSelect={(e) => this.onSelect(e)}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            我的发布
            </Menu.Item>
                        <Menu.Item key="2" icon={< PieChartOutlined />}>
                            班级数据
            </Menu.Item>
                        <Menu.Item key="3" icon={<SettingOutlined />}>
                            班级主页
            </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background header-wrap" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <span style={{ color: '#999' }}><NotificationOutlined />  {ANNOUNCEMENT}</span>
                        <div className="right-menu">
                            <span className="right-menu-item">
                                今天是 {moment().format('YYYY-MM-DD')}
                            </span>
                            <span className="right-menu-item">
                                <a href="#"><QuestionCircleOutlined /></a>
                            </span>
                            <span className="right-menu-item"><Badge size="small" count={5}>
                                <a href="#">  <BellOutlined /></a>
                            </Badge></span>

                        </div>
                    </Header>
                    <Content
                        className="site-layout-background home-content-wrap"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 600,
                        }}
                    >
                        {content}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

