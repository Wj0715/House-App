import React, { Component } from 'react'
import { Carousel, Grid } from 'antd-mobile'
import './main.css'
import { gethouselist } from '../../apis/apis.js'
import { connect } from 'react-redux'

var img1 = require('../../assets/img/img1.jpg')
var img2 = require('../../assets/img/img2.jpg')
var img3 = require('../../assets/img/img3.jpg')


const data = [
    { icon: 'house5', text: '新房' },
    { icon: 'house7', text: '二手房' },
    { icon: 'house1', text: '租房' },
    { icon: 'house2', text: '写字楼' },
    { icon: 'house4', text: '海外地产' },
    { icon: 'house3', text: '买房' },
    { icon: 'house5', text: '小区房价' },
    { icon: 'house8', text: '安居问答' }
].map((_val) => ({
    icon: require('../../assets/img/' + _val.icon + '.png'),
    text: _val.text,
}));

const data1 = [
    { icon1: 'icon_money', title: '我要借钱' },
    { icon1: 'icon_sum', title: '房贷计算' },
    { icon1: 'icon_zhisi', title: '知识' },
    { icon1: 'icon_sao', title: '扫一扫' }
].map((_val1) => ({
    icon: require('../../assets/img/' + _val1.icon1 + '.png'),
    text: _val1.title,
}));


 class Main extends Component {
    constructor() {
        super()
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176, //轮播图点高度
            city: "定位中", //搜索栏定位默认
            list: []  //房产信息列表
        }

    }
    componentDidMount() {
        let _this = this

        setTimeout(() => {
            this.setState({
                data: [img1, img2, img3],
            });
        }, 100);
        //获取用户所在城市信息
        function showCityInfo() {
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        //地图显示当前城市
                        _this.setState({ city: cityinfo })
                    }
                } else {
                    console.log(result.info);

                }
            });
        }
        showCityInfo();
    }
    render() {
        return (
            <div className='box'>
                {/* 搜索框 */}
                <div className='title'>
                    <label className='search_city' onClick={this.clickcity}>{this.state.city}▼</label>
                    <div className='search_div'>
                        <img src={require('../../assets/img/icon_search.png')}alt=''></img>
                        <label>挑好房，上安居客App</label>
                    </div>
                    <img onClick={this.clickMap} src={require('../../assets/img/icon_map.png')} alt=''></img>
                </div>

                {/* 轮播图 */}
                <Carousel
                    autoplay
                    infinite
                >
                    {this.state.data.map(val => (
                        <a href='../../pages/Nav/History.js'
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                     window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                {/* 九宫格 */}
                <Grid data={data} activeStyle={false} hasLine={false} />
                <div className='bg'></div>
                <div className='ency_div'>
                    <h2>房产全百科</h2><span>专业的买房攻略</span>
                </div>
                <Grid data={data1} activeStyle={false} hasLine={false} />
                <div className='bg'></div>
                <div className='main'>
                    <h2>猜你喜欢</h2>
                   
                    <ul>
                         {this.state.list.map(obj=><li key={obj.id} onClick={this.clickhouse.bind(this,obj)}>
                            <img src={obj.src} alt=''></img>
                            <div>
                                <h3>{obj.name}</h3>
                                <p>{obj.area}<span>{obj.range}</span></p>
                                <p>{obj.type} <span>{obj.point}</span></p>
                            </div>
                            <span className='price'>{obj.price}/平</span>
                        </li>
                            )}
                    </ul>
                </div>
            </div>
        )
    }
    clickcity() {
        window.location.href = ('#/selectcity')
    }
    clickMap(){
        window.location.href = ('#/Map')
    }
    clickhouse(obj){
        this.props.dispatch({
            type:'addhouselist',
            obj
        })
        // console.log(obj);
        
    }
    async componentWillMount() {
        let res = await gethouselist()
        this.setState({
            list: res.data
        })
    }
}

export default connect()(Main)
