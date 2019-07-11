import React, { Component } from 'react'
import { WingBlank, InputItem, WhiteSpace, Button, Flex, Radio } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './reg.css'
let btn = {
    backgroundColor: '#62AB00'
}
let input = {
    borderBottom: ' 1px solid #ccc',
}
let span = {
    color: '#62AB00'
}

export default class reg extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#fff', height: "100%" }}>
                <WingBlank size='md'>
                    <InputItem
                        style={input}
                        clear
                        placeholder="请输入手机号"
                    >手机号:</InputItem>
                    <WhiteSpace size='md' />
                    <Flex justify="between">
                        <InputItem
                            style={input}
                            clear
                            placeholder="请输入验证码"
                        >验证码:
                    </InputItem>
                        <Button size="small">获取验证码</Button>
                    </Flex>
                    <Flex justify="center">
                        <Radio className="my-radio">我已同意<span style={span}>《安居客房产用户协议》</span >及<span style={span}>《隐私政策》</span></Radio>
                    </Flex>

                    <WhiteSpace size='md' />
                    <Button style={btn} type="primary">注册</Button>
                    <WhiteSpace size='md' />
                    <WhiteSpace size='md' />
                    <WhiteSpace size='md' />
                    <Link style={span} className='link' to='./login'>已有账号</Link>
                </WingBlank>

            </div>
        )
    }
}