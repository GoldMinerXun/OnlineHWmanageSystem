import React from 'react';
import { Input, Button, Tabs, Checkbox, Form } from 'antd';
import { UserOutlined,LockTwoTone,MobileTwoTone,MailTwoTone} from '@ant-design/icons';
import Logo from '../public/logo.png'
import './login.scss';

const { TabPane } = Tabs;


export default class App extends React.Component {
    render() {
        return <div className="login-page">
            <img className="background" src="https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg" alt="" />
            <div className="login-box-wrap">
                <div className="logo-head"><img src={Logo} alt="" /></div>
                <Form className="content">
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="账号密码登陆" key="1">
                            <Form.Item>
                                <Input size="large" placeholder="用户名" prefix={<UserOutlined style={{ color: "#40a9ff" }}/>} />
                            </Form.Item>
                            <Form.Item>
                                <Input.Password size="large" placeholder="密码" prefix={<LockTwoTone/>}/>
                            </Form.Item>
                            <Form.Item>
                                <div className="operators">
                                    <Checkbox>自动登陆</Checkbox>
                                    <a>忘记密码</a>
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" block size="large">登陆</Button>
                            </Form.Item>
                        </TabPane>
                        <TabPane tab="手机号登陆" key="2">
                            <Form.Item>
                                <Input size="large" placeholder="手机号" prefix={<MobileTwoTone />}/>
                            </Form.Item>
                            <Form.Item>
                                <div className="checkCode">
                                    <Input size="large" placeholder="验证码" style={{marginRight:'10px'}} prefix={<MailTwoTone />} />
                                    <Button size="large">获取验证码</Button>
                                </div>
                               
                            </Form.Item>
                            
                            <Form.Item>
                                <Button type="primary" block size="large">登陆</Button>
                            </Form.Item>
                        </TabPane>
                    </Tabs>
                </Form>

            </div>
        </div>
    }
}
