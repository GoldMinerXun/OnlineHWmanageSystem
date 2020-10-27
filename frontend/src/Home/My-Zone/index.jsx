import React from 'react';
import { Avatar, Divider,Form,Input,Button} from 'antd';
import './index.scss';
export default class MyZone extends React.Component{
    state = {
        avatar: 'https://a13.fp.ps.netease.com/file/5d37fbde5e6027ccd0129de1zl0kaHFo02',
        name: '红小豆',
        sno: 1704010828,
        major: '计算机科学与技术',
        classname: '计算机17-8班',
        manager:'李建勋'
    }
    render() {
        const { avatar,name,sno,major,classname,manager} = this.state;
        return <div className="my-zone">
            <Divider orientation="left">我的资料</Divider> 
            <div className="info">
                <p>姓名：{name}</p>
                {/* <p>头像： <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={avatar} icon /></p> */}
                <p>学号：{sno}</p>
                <p>专业：{major}</p>
                <p>班级：{classname}</p>
                <p>班级管理员：{manager}</p>
            </div>
            <Divider orientation="left">系统反馈</Divider> 
            <Form className="feedback-wrap">
                <Form.Item>
                    <Input.TextArea placeholder="请提交你对系统的吐槽吧～"/>
                </Form.Item>
                <Form.Item>
                   <Button type="primary">提交</Button>
                </Form.Item>
            </Form>
        </div>
    }
}
