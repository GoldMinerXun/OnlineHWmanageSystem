import React from 'react';
import { Radio, Input, List, Skeleton, Button, Avatar, Progress, Modal, Form, DatePicker, Popconfirm,Tabs, Table,} from 'antd';
import { DownOutlined } from '@ant-design/icons'
import './index.scss';
const { Search } = Input;
const { RangePicker } = DatePicker;
const { TabPane} = Tabs;
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '学号',
        dataIndex: 'sno',
        key: 'sno',
    }
];
export default class AdminPublish extends React.Component {
    state = {
        type: 'all',
        listData: [{
            title: '软件工程实验一',
            startTime: '2020-09-10',
            endTime: '2020-10-10'
        }, {
            title: '软件工程实验一',
            startTime: '2020-09-10',
            endTime: '2020-10-10'
        }, {
            title: '软件工程实验一',
            startTime: '2020-09-10',
            endTime: '2020-10-10'
        }],
        modalVisibal: false,
        newNoticeVisible: false,
        detailVisible: false,
        finishData: [{ name: '红小豆', sno: '1704010828' }, { name: '罗小黑', sno: '1704010825' }],
        unfinishData: [{ name: '弯弯', sno: '1704010821' }, { name: '七七', sno: '17040108254' }]
    }
    handleSizeChange = (e) => {
        this.setState({
            type: e.target.value
        })
    }
    onSearch = (value) => {

    }
    onChange = (time) => {

    }
    onOk = () => {
        console.log('确认修改')
    }
    deleteItem = (e) => {

    }
    render() {
        const { type, listData, modalVisibal, newNoticeVisible, detailVisible,finishData,unfinishData } = this.state;
        return <div className="admin-publish">
            <div className="header">
                <p>作业发布</p>
                <div className="filter-wrap">
                    <Radio.Group value={type} onChange={this.handleSizeChange}>
                        <Radio.Button value="all">全部</Radio.Button>
                        <Radio.Button value="doing">进行中</Radio.Button>
                        <Radio.Button value="done">已完成</Radio.Button>
                    </Radio.Group>
                    <Search
                        placeholder="请输入作业名称"
                        allowClear
                        onSearch={this.onSearch}
                        style={{ width: 200, margin: '0 10px' }}
                    />
                </div>
            </div>
            <div className="body">
                <Button type='dashed' block size='large' onClick={() => this.setState({ newNoticeVisible: true })}>添加</Button>
                <Modal
                    visible={modalVisibal}
                    title="修改"
                    onCancel={() => this.setState({ modalVisibal: false })}
                    cancelText="取消"
                    okText="确认修改"
                >
                    <Form {...formItemLayout}>
                        <Form.Item label='作业名称' name='title' rules={[{ required: true, message: '请输入新的作业名！' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label='作业起止时间' name='time' rules={[{ required: true, message: '请输入新的起止时间！' }]}>
                            <RangePicker
                                placeholder={['开始时间', '结束时间']}
                                showTime={{ format: 'HH:mm' }}
                                format="YYYY-MM-DD HH:mm"
                                onChange={this.onChange}
                                onOk={this.onOk}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
                <Modal
                    visible={newNoticeVisible}
                    title="新建作业通知"
                    onCancel={() => this.setState({ newNoticeVisible: false })}
                    cancelText="取消"
                    okText="确认新建"
                >
                    <Form {...formItemLayout}>
                        <Form.Item label='作业名称' name='title' rules={[{ required: true, message: '请输入作业名！' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label='作业起止时间' name='time' rules={[{ required: true, message: '请输入起止时间！' }]}>
                            <RangePicker
                                placeholder={['开始时间', '结束时间']}
                                showTime={{ format: 'HH:mm' }}
                                format="YYYY-MM-DD HH:mm"
                                onChange={this.onChange}
                                onOk={this.onOk}
                            />
                        </Form.Item>

                    </Form>
                </Modal>
                <List
                    className="homework-list"
                    itemLayout="horizontal"
                    dataSource={listData}
                    size="large"
                    renderItem={item => (
                        <List.Item
                            actions={[<a key="list-loadmore-edit" onClick={() => this.setState({
                                modalVisibal: true
                            })}>修改</a>, <Popconfirm
                                title="你确定要删除吗?"
                                onConfirm={(item) => this.deleteItem(item)}
                                okText="确定"
                                cancelText="放弃"
                            >
                                <a href="#">删除</a>
                                </Popconfirm>, <a onClick={()=>this.setState({detailVisible:true})}>详情</a>]}
                        >
                            <Modal
                                visible={detailVisible}
                                title="作业详情"
                                onCancel={() => this.setState({ detailVisible: false })}
                                cancelText="取消"
                                okText="一键催交"
                            >
                                <Tabs defaultActiveKey="1" onChange={this.changeTable}>
                                    <TabPane tab="已提交" key="1">
                                        <Table columns={columns} dataSource={finishData} />
    </TabPane>
                                    <TabPane tab="未提交" key="2">
                                        <Table columns={columns} dataSource={unfinishData} />
    </TabPane>

                                </Tabs>
                            </Modal>
                            <Skeleton title={false} loading={false} active>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar className="avator-wrap" size={'large'} src="https://img.alicdn.com/tfs/TB1TFFSnggP7K4jSZFqXXamhVXa-1200-1200.png" />
                                    }
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={'开始时间：' + item.startTime + '｜截止时间：' + item.endTime}
                                />
                                <div className="progress-wrap">
                                    <Progress percent={80} status="active" />
                                </div>
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    }
}