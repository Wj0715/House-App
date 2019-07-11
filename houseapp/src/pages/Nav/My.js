import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'antd-mobile'
import './My.css'
const Item = List.Item;

export default class My extends Component {
    constructor(){
        super()
        this.state={
            Mylist : [
                {id:'1',src:'my_int',text:'我的积分'},
                {id:"2",src:'my_sub',text:'我的订阅'},
                {id:"3",src:'my_con',text:'微聊联系人'},
                {id:'10'},
                {id:"4",src:'my_cal',text:'房贷计算器'},
                {id:'5',src:'my_house',text:'我的房子'},
                {id:'11'},
                {id:"6",src:'my_record',text:'我的看房记录'},
                {id:"7",src:'my_answer',text:'我的问答'},
                {id:'12'},
                {id:"8",src:'my_set',text:'设置'},
                {id:'9',src:'my_set',text:'意见反馈'}
            ],
            textAcc:'登录/',
            textReg:'注册'
        }
    }
    render() {
        return (
            <div id='My'>
                <div className='top_div'>
                    <div className='top_title'>
                        <img src={require('../../assets/img/anstor.jpeg')}alt=''></img>
                        <div className='acc_div'>
                            <p><Link to='./login'>{this.state.textAcc}</Link><Link to='./reg'>{this.state.textReg}</Link></p>
                            <p onClick={this.clickChart}>可以与经纪人发起聊天</p>
                        </div>
                        <img className='title_img' src={require('../../assets/img/icon_set.png')}alt=''></img>
                    </div>
                    <ul>
                        <li>
                            <p>0</p>
                            <p> <img className='li_img' src={require('../../assets/img/icon_wallet.png')} alt=''></img>钱包</p>
                        </li>
                        <li>
                            <p>0</p>
                            <p> <img className='li_img' src={require('../../assets/img/icon_coupon.png')}alt=''></img>优惠</p>
                        </li>
                        <li>
                            <p>0</p>
                            <p> <img className='li_img' src={require('../../assets/img/icon_integral.png')} alt=''></img>积分</p>
                        </li>
                    </ul>
                </div>
                <div className='bg'></div>
                <List className="my-list">
                    {this.state.Mylist.map(obj=>{
                        if(obj.src){
                            return  <Item className='item' key={obj.id}
                        arrow="horizontal"
                        thumb={require('../../assets/img/'+obj.src+'.png')}
                        multipleLine
                        onClick={this.clickName.bind(this,obj.text)}>{obj.text}</Item>

                        }else{
                            return <div key={obj.id} style={{height:'10px',backgroundColor:"#F5F5F9"}}></div>
                        }
                    }
                        )}
                </List>
            </div>
        )
    }
    clickChart(){
        window.location.href=('#/chart')
    }
    clickName(name){
        console.log(name);
        
    }
    componentDidMount(){
        if(localStorage.getItem('account')){
         this.setState({
             textAcc:localStorage.getItem('account'),
             textReg:''
         })
        }
    }
}
