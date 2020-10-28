import React from 'react';
import { Upload, Button,Table,Divider, } from 'antd';
import { UploadOutlined, QuestionCircleOutlined, } from '@ant-design/icons';
import './index.scss';
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '班级',
        dataIndex: 'class',
        key: 'class',
    },
    {
        title: '学号',
        dataIndex: 'sno',
        key: 'sno',
    },
];

const mockdata = [
    {
        key: '1',
        name: '红小豆',
        sno: '1704010828',
        class: '计算机17-8班'
    },
    {
        key: '2',
        name: '罗小黑',
        sno: '1704010820',
        class: '计算机17-8班'
    },
    {
        key: '3',
        name: '七七',
        sno: '1704010810',
        class: '计算机17-8班'
    },
];
export default class AdminClass extends React.Component {
    state = {
        data:mockdata
    }
    upload = (info) => {
        console.log(info)
    }
    render() {
        const { data } = this.state;
        return <div className="admin-class">
            <div className="admin-uploader">
                <Upload name='file'
                    action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                    headers={{ authorization: 'authorization-text' }}
                    onChange={(info) => this.upload(info)}>
                    <Button icon={<UploadOutlined />}>点击上传班级信息</Button>
                </Upload>
                <a className="download" href=""><QuestionCircleOutlined/> 文件模版</a> 
            </div>
          <Divider orientation='left'>预览数据</Divider>
            <Table className="stu-table" columns={columns} dataSource={data} />
        </div>
    }
}