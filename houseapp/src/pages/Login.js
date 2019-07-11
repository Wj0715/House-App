import React, { Component } from 'react'
import { Flex, WhiteSpace, InputItem, WingBlank, Button, Radio } from 'antd-mobile';
import { Link } from 'react-router-dom'

import { login } from '../apis/apis.js'  //axios请求
let log = {
    width: "30%"
}
let btn = {
    backgroundColor: '#62AB00'
}
let fontCl = {
    color: '#62AB00'
}
let label = {
    position: "fixed",
    top: '780px',
    color: '#D6E6FF'
}

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            account: "",
            pwd: "",
            errorText:'none'
        }
    }
    render() {
        return (
            <div>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <Flex justify="center">
                    <img style={log} src={require('../assets/img/log.jpg')}alt=''></img>
                </Flex>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WingBlank size="md">
                    <InputItem
                        clear
                        placeholder="请输入手机号"
                        value={this.state.account}
                        onChange={(val) => {
                            this.setState({ account: val })
                        }}
                    ><img src={require('../assets/img/account.png')}alt=''></img></InputItem>
                    <WhiteSpace size="sm" />
                    <InputItem
                        clear
                        placeholder="请输入密码"
                        type='password'
                        value={this.state.pwd}
                        onChange={(val) => { this.setState({ pwd: val }) }}
                    ><img src={require('../assets/img/pwd.png')}alt=''></img></InputItem>

                    <WhiteSpace size="lg" />
                    <p style={{display:this.state.errorText}}>用户或密码错误，请重新输入</p>
                    <Button onClick={this.clickUser.bind(this)} style={btn} type="primary">登录</Button>
                    <WhiteSpace />
                    <Flex justify="between">
                        <Link style={fontCl} to='./reg'>手机立即注册</Link>
                        <Link style={fontCl} to='./forgetpwd'>忘记密码</Link>
                    </Flex>
                    <Flex justify="center" style={label}>
                        <Radio className="my-radio">登录/注册即代表同意《安居客房产用户协议》</Radio>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
    async clickUser() {
        let res = await login(this.state.account, this.state.pwd)
        console.log(res);
        if(res.data==='ok'){
            // 保存账户信息
            localStorage.setItem('account',this.state.account)
            window.location.href=('#/')
        }else{
         this.setState({
             errorText:'block'
         })
        }

    }
}
