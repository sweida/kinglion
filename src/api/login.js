import fetch from '@/utils/fetch';
import qs from 'qs'

export function login(data) {
  return fetch({
    url: 'apis/login.do',
    method: 'post',
    data: qs.stringify(data)
  });
}
