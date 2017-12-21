import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import home from '@/view/home'
import infoDetail from '../view/infoDetail'
import orderlist from '../view/orderlist/orderlist'
import recharge from '../view/recharge/recharge'
import reservation from '../view/reservation/reservation'
import reservationlist from '../view/reservation/reservationlist'
import OperationPage from '../view/OperationPage/OperationPage'
import customer from '../view/Customer/list'
import customerdetail from '../view/Customer/detail'
import HoldRecord from '../view/HoldRecord/HoldRecord'
import payment from '../view/payment/payment'
import buyproduct from '../view/buyproduct/buyproduct'
import debt from '../view/debt/debt'
import message from '../view/setting/message'
import password from '../view/setting/password'
// import headnav from './view/headnav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login,
      name: 'login',
      hidden: true
    },
    {
      path: '/',
      component: login,
      name: 'login',
    },
    {
      path: '/home',
      component: home,
      name: 'home',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
  	  children: [
    		{ path: '/', component: infoDetail, name: '主页' },
    		{ path: '/infoDetail', component: infoDetail, name: 'infoDetail', hidden: true },
        { path: '/orderlist', component: orderlist, name: '订单管理', hidden: true },
        { path: '/recharge', component: recharge, name: 'recharge', hidden: true },
        { path: '/reservation', component: reservation, name: '预约', hidden: true },
        { path: '/reservationlist', component: reservationlist, name: '预约列表', hidden: true },
        { path: '/OperationPage', component: OperationPage, name: '耗卡', hidden: true },
        { path: '/customer', component: customer, name: '客户管理',
          children: [
          ]
        },
        {path: '/customerdetail', component: customerdetail, name: '客户详情', },
        // { path: '/customer/detail', component: customerdetail, name: '客户详情', hidden: true },
        { path: '/HoldRecord', component: HoldRecord, name: '持有记录', hidden: true },
        { path: '/buyproduct', component: buyproduct, name: '购买产品', hidden: true },
        { path: '/debt', component: debt, name: '欠款' },
        { path: '/payment', component: payment, name: '付款', hidden: true },
        { path: '/message', component: message, name: '个人信息'},
        { path: '/password', component: password, name: '修改密码'}
      ]
    }

  ]
})
