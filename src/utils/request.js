import axios from "axios";
import { Message } from 'element-ui';
import router from '@/router';

// 创建axios实例
// const nocodeList = ["welthub/applet/getActivityQrCode"];
const service = axios.create({
  timeout: 20000 // 请求超时时间
});
// service.defaults.headers["Content-Type"] = "multipart/form-data";
// service.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
service.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
service.defaults.headers['Access-Control-Allow-Origin'] = '*'
service.defaults.headers['Access-Control-Allow-Methods'] = 'PUT, POST, GET, DELETE'
service.defaults.headers['Access-Control-Allow-Private-Network'] = true
// request拦截器
service.interceptors.request.use(
  config => {
    config.headers.platform = "PC";
    // config.headers['Content-Type'] = "application/x-www-form-urlencoded";
    // if (config.headers.responseType) {
    //   config.responseType = config.headers.responseType;
    // }
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    console.log('请求结果', response);
    if (response.data.code !== 200) {
      console.log('请求结果 - !200', response);
      if (response.data && response.data.message) {
        Message({
          showClose: true,
          message: response.data.message,
          type: "warning",
          duration: 3 * 1000
        });
        router.push({ path: '/login' })
      }
    return Promise.reject(response);
    } else {
      return response.data;
    }
  },
  error => {
    var errorMsg;
    if (error.response) {
      const { data } = error.response;
      const { errors, message } = data;
      if (errors instanceof Array) {
        errorMsg = [];
        errors.forEach(function(t) {
          errorMsg.push(t.defaultMessage);
        });
        errorMsg = errorMsg.join(",");
      } else if (errors instanceof Object) {
        errorMsg = errors.defaultMessage || message;
      } else {
        errorMsg = data.error || message || data;
      }
    } else {
      errorMsg = error.message;
    }
    return Promise.reject(error);
  }
);

export default service;
