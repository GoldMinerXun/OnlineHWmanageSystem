import React from 'react';
import { Card, Statistic, Avatar,} from 'antd';
import './index.scss'
export default class AdminData extends React.Component{
    state = {
        rankData: [{
            name: '红小豆',
            sno:'1704010828'
        }, {
                name: '罗小黑',
                sno: '1704010827'
            }, {
                name: '小缸',
                sno: '1704010810'
            }]
    }
    render() {
        const {rankData } = this.state;
        return (
            <div className='admin-data'>
                <div className='data-header'>
                    <Card className='data-card'>
                        <Statistic title="共发布作业" value={'23次'} />
                    </Card>
                    <Card className='data-card'>
                        <Statistic title="班级作业完成率" value={'98%'} />
                    </Card>
                </div>
                <div className='data-body'>
                    <div className="data-ranklist">
                        <ul>
                            {
                                rankData.map((item,index) => {
                                    return <li>
                                        < Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{index + 1}</Avatar> 
                                        <span>{item.name}</span>
                                        <span>{item.sno}</span>
                                        
                                    </li>
                              })  
                            }
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}