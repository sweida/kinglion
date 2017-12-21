import fetch from '@/utils/fetch';
import qs from 'qs'

// 客户列表
export function getinfo(data) {
  return fetch({
    url: 'apis/queryfastwork.do',
    method: 'get',
    data: qs.stringify(data)
  });
}

//搜索客户
export function searchCustomer(data) {
  return fetch({
    url: 'apis/queryCustomerInfo.do',
    method: 'post',
    data: qs.stringify(data)
  });
}
//添加新客户
export function addCustomer(data) {
  return fetch({
    url: 'apis/addCustomer.do',
    method: 'post',
    data: qs.stringify(data)
  });
}
//客户详情页
export function CustomerDetail(data) {
  return fetch({
    url: 'apis/enterCustomerBasicPage.do',
    method: 'post',
    data: qs.stringify(data)
  });
}
//更新客户信息
export function updateCustomer(data) {
  return fetch({
    url: 'apis/updateCustomerBasicInfo.do',
    method: 'post',
    data: qs.stringify(data)
  });
}



// 欠款
export function debt(data) {
  return fetch({
    url: 'apis/queryrestlist.do',
    method: 'post',
    data: qs.stringify(data)
  });
}

