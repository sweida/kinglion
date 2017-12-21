import fetch from '@/utils/fetch';
import qs from 'qs'

// 订单列表
export function orderlist(data) {
  return fetch({
    url: 'apis/queryordermanager.do',
    method: 'post',
    data: qs.stringify(data)
  });
}
// 持有记录
export function holdRecord(data) {
  return fetch({
    url: 'apis/queryHoldRecord.do',
    method: 'post',
    data: qs.stringify(data)
  });
}
// 作废持有记录
export function remarkHoldOrder(data) {
  return fetch({
    url: 'apis/cancelHoldOrder.do',
    method: 'post',
    data: qs.stringify(data)
  });
}

// 欠款列表
export function debt(data) {
  return fetch({
    url: 'apis/queryrestlist.do',
    method: 'post',
    data: qs.stringify(data)
  });
}

