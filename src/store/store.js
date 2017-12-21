import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    token:'',
    userindex:0,
    customer_id:'CST2017111010174108611616',
    customer_info:[],
    admin: {
        id:'admin',
        name:'王狮传奇',
        region:'超级管理员',
        img:'https://avatars2.githubusercontent.com/u/23181508?s=460&v=4',
        password:'123456'
    },
    level:['非会员','白银会员','黄金会员','白金会员','钻石会员',],
    userli: [
        {id:1,name: '王语嫣1', number:'23442', level:'经理等级1',state:4, date: '2017-11-11'}, 
        {id:2,name: '王语嫣2', number:'23442', level:'经理等级1',state:1, date: '2017-11-12'}, 
        {id:3,name: '王语嫣3', number:'23442', level:'经理等级1',state:1, date: '2017-11-13'}, 
        {id:4,name: '王语嫣4', number:'23442', level:'经理等级1',state:2, date: '2017-11-14'}, 
        {id:5,name: '王语嫣5', number:'23442', level:'经理等级1',state:4, date: '2017-11-15'}, 
        {id:6,name: '王语嫣6', number:'23442', level:'经理等级1',state:3, date: '2017-11-16'}, 
        {id:7,name: '王语嫣7', number:'23442', level:'经理等级1',state:3, date: '2017-11-17'}, 
        {id:8,name: '王语嫣8', number:'23442', level:'经理等级1',state:2, date: '2017-11-18'}, 
        {id:9,name: '王语嫣9', number:'23442', level:'经理等级1',state:2, date: '2017-11-19'}, 
        {id:1,name: '王语嫣1', number:'23442', level:'经理等级1',state:2, date: '2017-11-10'}, 
        {id:11,name: '王语嫣7', number:'23442', level:'经理等级1',state:2, date: '2017-11-18'}, 
        {id:12,name: '王语嫣7', number:'23442', level:'经理等级1',state:2, date: '2017-11-18'}, 
        {id:13,name: '王语嫣7', number:'23442', level:'经理等级1',state:2, date: '2017-11-18'}
    ]
}


export default new Vuex.Store({
	state
});