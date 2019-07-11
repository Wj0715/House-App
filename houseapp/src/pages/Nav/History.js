import React, { Component } from 'react'
import './main.css'
import { connect } from 'react-redux'

 class History extends Component {
    render() {
        let {houselist} = this.props;
        return (
            <div className='main'>
                <ul>
                 <h2 style={{display:houselist.length===0?'block':'none'}}>暂无历史记录</h2>
                         {
                             houselist.map(obj=><li key={obj.id}>
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
        )
    }
}
export default connect((state)=>{
    return {houselist:state.houselist}
})(History)