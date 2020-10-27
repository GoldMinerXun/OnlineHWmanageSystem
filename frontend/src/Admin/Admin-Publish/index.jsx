import React from 'react';
import { Radio, Input, List, Skeleton, Button, Avatar, Progress, Modal,Form,DatePicker} from 'antd';
import './index.scss';
const { Search } = Input;
const { RangePicker} = DatePicker;

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
    }
    handleSizeChange = (e) => {
        this.setState({
            type: e.target.value
        })
    }
    onSearch = (value) => {

    }
    onChange=(time)=> {
        
    }
    onOk = () => {
        console.log('确认修改')
    }
    render() {
        const { type, listData,modalVisibal,newNoticeVisible } = this.state;
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
                <Button type='dashed' block size='large' onClick={()=>this.setState({newNoticeVisible:true})}>添加</Button>
                <Modal visible={modalVisibal} title="修改" onCancel={()=>this.setState({modalVisibal:false})}>
                    <Form>
                        <Form.Item label='作业名称' name='title' rules={[{ required: true, message: '请输入新的作业名！' }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label='作业起止时间' name='time' rules={[{ required: true, message: '请输入新的起止时间！' }]}>
                            <RangePicker
                                placeholder={['开始时间','结束时间']}
                                showTime={{ format: 'HH:mm' }}
                                format="YYYY-MM-DD HH:mm"
                                onChange={this.onChange}
                                onOk={this.onOk}
                            />
                        </Form.Item>

                    </Form>
                </Modal>
                <Modal visible={newNoticeVisible} title="新建作业通知" onCancel={() => this.setState({ newNoticeVisible: false })}>
                    <Form labelAlign='right'>
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
                                modalVisibal:true
                            })}>修改</a>, <a key="list-loadmore-more">详情</a>]}
                        >
                            <Skeleton title={false} loading={false} active>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar className="avator-wrap" size={'large'} src="https://img.alicdn.com/tfs/TB1TFFSnggP7K4jSZFqXXamhVXa-1200-1200.png" />
                                    }
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={'开始时间：'+item.startTime + '｜截止时间：' + item.endTime}
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