import React from 'react';
import { Card, Progress, Input, Select, Form, Upload, message } from 'antd';
import './index.scss'

const { Search } = Input;
const { Option } = Select;
const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
}
export default class HomeworkNotice extends React.Component {
    state = {
        noticeArray: [{
            id: 10202000,
            title: '软件工程实验一',
            content: {
                startTime: '2020-09-22 8:00',
                endTime: '2020-09-28 20:00',
                classProgress: 80
            }
        }, {
            id: 10202000,
            title: '软件工程实验二',
            content: {
                startTime: '2020-09-22 8:00',
                endTime: '2020-09-28 20:00',
                classProgress: 80
            }
        }],
        orderBy: 'endTime'
    }
    handleSizeChange(e) {
        console.log(e)

    }
    uploadFile() {

    }
    render() {
        const { noticeArray, orderBy } = this.state;
        return (
            <div className="homework-notice-wrap">
                <div className="filter-wrap">
                    <Search placeholder="搜索作业名称" enterButton />
                    <Form className="order-wrap">
                        <Form.Item className="order-item">
                            <Select defaultValue="positive" name="endTime" onChange={(e) => {
                                this.setState({
                                    endTime: e === 'positive' ? true : false
                                })
                            }}>
                                <Option value="positive">截止时间正序</Option>
                                <Option value="reverse">截止时间倒序</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item className="order-item">
                            <Select defaultValue="positive" name="title" onChange={(e) => {
                                this.setState({
                                    title: e === 'positive' ? true : false
                                })
                            }}>
                                <Option value="positive">作业名称正序</Option>
                                <Option value="reverse">作业名称倒序</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item className="order-item" >
                            <Select defaultValue="positive" name="progess" onChange={(e) => {
                                this.setState({
                                    progress: e === 'positive' ? true : false
                                })
                            }}>
                                <Option value="positive">班级进度正序</Option>
                                <Option value="reverse">班级进度倒序</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item className="order-item" >
                            <Select defaultValue="positive" name="status" onChange={(e) => {
                                this.setState({
                                    status: e === 'positive' ? true : false
                                })
                            }}>
                                <Option value="positive">未提交作业</Option>
                                <Option value="reverse">已提交作业</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </div>

                <div className="notice-list">
                    {
                        noticeArray.map(item => {
                            return <Card className="notice-item" title={item.title} style={{ width: 300 }}>
                                <p>开始时间：{item.content.startTime}</p>
                                <p>截止时间：{item.content.endTime}</p>
                                <p className="progress-wrap">
                                    <span className="progress">
                                        班级提交进度：
                               </span>
                                    <Progress percent={item.content.classProgress} status="active" />
                                </p>
                                <p><Upload {...uploadProps}>
                                    <a index={item.id} onClick={this.uploadFile}>快速提交</a>
                                </Upload></p>
                            </Card>
                        })
                    }
                </div>
            </div>

        )
    }
}