import React from 'react';
import {  Divider,Empty,Timeline,Statistic } from 'antd';

import './index.scss';

export default class MyData extends React.Component {
    state = {
        activeData: {
            finished: 12,
            unfinish: 10,
            weekStatistic:4
        },
        timeline: [{
            time: '2020-10-10',
            data: [{
                time: '2020-10-10 09:10',
                content: '软件工程实验一'
            }, {
                    time: '2020-10-10 19:10',
                    content: '软件工程实验二'
                }]
        }, {
                time: '2020-10-09',
                data: [{
                    time: '2020-10-09 09:10',
                    content: '软件工程实验一'
                }, {
                    time: '2020-10-09 19:10',
                    content: '软件工程实验二'
                }]
            }]
    }
    render() {
        const {activeData,timeline } = this.state;
        return <div className="my-data-wrap">
            <Divider orientation="left">我的作业提交活动</Divider>
            <div className="active-data">
                {activeData ? <div className="active-list">
                    <Statistic className="active-data-item" title="已提交作业数" value={activeData.finished} />
                    <Statistic className="active-data-item" title="未提交作业数" value={activeData.unfinish} />
                    <Statistic className="active-data-item" title="本周提交作业数" value={activeData.weekStatistic} />
                </div>: <Empty description="暂无数据"/> }
            </div>
            <Divider orientation="left">我的提交历史</Divider>
            <div className="active-history">
                <Timeline>
                    {
                        timeline&&timeline.map(item => {
                            return <Timeline.Item color="blue">
                                <p>在{item.time}</p>
                                {item.data.map(p => {
                                    return <p>在{p.time} 提交了 {p.content}</p>
                                })}
                                <Divider/>
                            </Timeline.Item>
                        })
                    }
                </Timeline>
            </div>
        </div>
    }
}