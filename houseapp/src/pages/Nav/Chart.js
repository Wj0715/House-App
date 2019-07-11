import React, { Component } from 'react'
import { WingBlank,Button } from 'antd-mobile'
import './Chart.css'
import { connect } from 'react-redux'
let btn = {
    backgroundColor: '#62AB00'
}
 class Chart extends Component {
    render() {
        return (
            <div>
                <WingBlank>
                    <div className='chart_div'>
                        <img className='chart_img' src={require('../../assets/img/icon_chart.jpg')} alt=''></img>
                        <p> 置业顾问：茄芯酱 </p>
                        <p>专业服务诚信做人诚心做事！</p>
                        <Button className='chart_btn' style={btn}>我要聊天</Button>
                    </div>
                </WingBlank>

            </div>
        )
    }
    clickname(){
        this.props.dispatch({
            type:"changeName"
        })
      
    }
}
export default connect((state)=>{
    return {
        name:state.name
    }
})(Chart)


