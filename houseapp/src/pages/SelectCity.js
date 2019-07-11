import React, { Component } from 'react'
import city from '../city.json'
import BScroll from 'better-scroll'

export default class SelectCity extends Component {
    render() {
        return (
            <div>
                {/* 右侧浮动条 */}
                <div onTouchMove={this.touchmove.bind(this)} style={{ position: 'fixed', width: '14px', backgroundColor: "#fff", right: "0", top: '25%' }}>
                    {city.citys.map(obj =>
                        <div className='L_city_div'>{obj.title}</div>
                    )}
                </div>
                {/* 左侧城市区域 */}
                <div id='city_div' style={{ position: "fixed", width: "95%", height: "95%", overflow: 'auto' }}>
                    <ul className='content' style={{ padding: '0px' }}>
                        {/* 热门城市 */}
                        <div>
                            <h4 style={{paddingTop:'15px'}}>热门城市</h4>
                            <div style={{ display: "flex", flexWrap: "wrap",alignItems:"center",backgroundColor:'#fff',height:"80px"}}>
                                {city.hotcity.map(obj =>
                                    <div style={{ width: "25%" }}>{obj}</div>
                                )}
                            </div>
                        </div>
                        {/* 城市列表 */}
                        <div>
                            {city.citys.map(obj =>
                                <div id={obj.title}>
                                    {/* 首字母 */}
                                    <h4>{obj.title}</h4>
                                    {/* 子节点 */}
                                    <div>
                                        {obj.lists.map(name =>
                                            <div style={{ backgroundColor: '#fff', padding: "20px 0 20px 20px ", borderBottom: '1px solid #f8f8f9' }}>
                                                {name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        )
    }

    touchmove(e) {
        // console.log(e.touches[0])
        // elementFromPoint: 根据坐标获取当前坐标的元素
        let ele = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
        // console.log(ele);
        
        if (ele && ele.className === 'L_city_div') {
            this.leftscroll.scrollToElement(document.getElementById(ele.innerHTML), 300)
        }
    }
    componentDidMount() {
        this.leftscroll = new BScroll('#city_div')
    }
}
