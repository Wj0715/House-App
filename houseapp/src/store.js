import { createStore, combineReducers } from 'redux'

// const store = createStore(function (state='张三', action) {
//     console.log(state, "state");
//     console.log(action, 'action');
//     switch (action.type) {
//         case "test": return '李四'
//         default: return state
//     }
// })                                                                                                                                              
// var a = {
//     type: "test"
// }
// store.dispatch(a)
// console.log(store.getState());


function name(state = '佳佳', action) {
    switch (action.type) {
        case 'changeName':return '团子'
        default: return state;
    }

}
function age(state = 18, action) {
    switch (action.type) {
        default: return state;
    }
}
function sex(state = '女', action) {
    switch (action.type) {
        default: return state;
    }
}
// 房子历史列表
function houselist(state=[],action){
switch(action.type){
    case 'addhouselist' :
        for(let i = 0;i<state.length;i++){
            if(state[i].id===action.obj.id){
                state.splice(i,1)
                break;
            }
        }
        // 构建一个新的数组，把老的历史记录拷贝过去
        return [action.obj,...state]
    default : return state
}
}

//  合并多个状态为一个状态
var Bigstate = combineReducers({
    name,
    age,
    sex,
    houselist
})
const store = createStore(Bigstate)
var a = {
    type: "test"
}
store.dispatch(a)
// console.log(store.getState());




export default store;