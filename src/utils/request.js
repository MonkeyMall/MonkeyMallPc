import axios from "axios";
import { Message } from 'element-ui';
// 创建axios实例
const nocodeList = ["welthub/applet/getActivityQrCode"];
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
      Message({
        showClose: true,
        message: response.data.message,
        type: "warning",
        duration: 3 * 1000
      });
    return Promise.reject(response);
    } else {
      return response.data;
    }
    // /**
    //  * code为非1是抛错 可结合自己业务进行修改
    //  */
    // // console.log(response)
    // // const url = response.config.url;
    // const res = response.data;
    // // const hasNocode = nocodeList.some(k => url.indexOf(k) > -1);
    // console.log('是什么', hasNocode)
    // // if (hasNocode) {
    //   return res;
    // // }
    // res.code = Number(res.code);
    // if (res.code !== 1) {
    //   // 4002:非法的token; 4003 oken 过期了token验证失败
    //
    //   // Message({
    //   //   showClose: true,
    //   //   message: res.desc,
    //   //   type: "error",
    //   //   duration: 5 * 1000
    //   // });
    //   return Promise.reject(res);
    // } else {
    //   return response.data;
    // }
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
    // Message({
    //   message: errorMsg,
    //   type: "error",
    //   duration: 5 * 1000
    // });
    return Promise.reject(error);
  }
);

export default service;
