import React from 'react';
import { Layout, Menu ,Skeleton} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    PieChartOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import HomeworkNotice from '../Homework-Notice/index'
import './index.scss'
const { Header, Sider, Content } = Layout;
const ANNOUNCEMENT = '公告：本网站诚招维护人，有意者联系178977641@qq.com';
export default class Home extends React.Component {
    state = {
        collapsed: false,
        content:<Skeleton/> ,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                content: <HomeworkNotice />
            })
        },3000)
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    onSelect = (e) => {
        if (e.key == 1) {
            this.setState({
                content: <HomeworkNotice />
           })
       }
    }

    render() {
        const {content} = this.state;
        return (
            <Layout className="home-wrap">
                <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">Homework Management</div>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} onSelect={(e)=>this.onSelect(e)}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            我的作业
            </Menu.Item>
                        <Menu.Item key="2" icon={< PieChartOutlined/>}>
                            我的数据
            </Menu.Item>
                        <Menu.Item key="3" icon={<SettingOutlined />}>
                            我的主页
            </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <span style={{color:'#999'}}>{ANNOUNCEMENT}</span>
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

