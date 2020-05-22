// import cookie from 'react-cookies';
import { createFromIconfontCN } from '@ant-design/icons';

/**
 * @Description: 公共调用
 * @param {图标} MyIcon
 * @param {远程IP} ServerIP
 * @param {fetch请求方法} request
 */
export const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1636008_tovc4f2oj4a.js',
});

export const ServerIP = "http://localhost:4000";


export default function request(method: string, url: string, body?: any, history?: any) {
  method = method.toUpperCase();
  if (method === 'GET') {
    body = undefined;
  } else {
    body = body && JSON.stringify(body);
  }
  // const c_token = cookie.load('x-auth-token');
  // sessionStorage.setItem('token', c_token);
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'x-auth-token': c_token
    },
    body: body
  }).then((res) => {
    // const token = res.headers.get('x-auth-token');
    // if (token) {
    //   cookie.save('x-auth-token', token, { path: '/' });
    // }
    if (res.status === 401) {
      history.push('/');
      return Promise.reject('Unauthorized.');
    } else {
      return res.json();
    }
  });
}

export const get = (url: string) => request('GET', url);
export const post = (url: string, body: any) => request('POST', url, body);

