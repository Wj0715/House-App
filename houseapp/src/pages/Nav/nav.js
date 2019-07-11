import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import Main from './Main.js'
import Chart from './Chart.js'
import History from './History.js'
import My from './My.js'


export default class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'main',
            iconList: [{ id: "main", title: "首页", icon: 'icon_index' },
            { id: "chart", title: "微聊", icon: 'icon_chart' },
            { id: "history", title: "足迹", icon: 'icon_histroy' },
            { id: "my", title: "我的", icon: 'icon_my' }]

        };
    }
    render() {
        return (

            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#62AB00"
                    barTintColor="white"
                >
                    {this.state.iconList.map(obj => <TabBar.Item
                        title={obj.title}
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: ` url(${require('../../assets/img/' + obj.icon + '_s.png')}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('../../assets/img/' + obj.icon + '.png')}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === obj.id}
                       
                        onPress={() => {
                            this.setState({
                                selectedTab: obj.id,
                            });
                        }}
                    >
                        {this.renderContent()}
                    </TabBar.Item>
                    )}

                </TabBar>
            </div>

        )
    }
    renderContent() {
        switch (this.state.selectedTab) {
            case 'main': return <Main></Main>
            case 'chart': return <Chart></Chart>
            case 'history': return <History></History>
            case 'my': return <My></My>
        }
    }
}
