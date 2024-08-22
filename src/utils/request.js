import axios from "axios";

// 创建axios实例
const nocodeList = ["welthub/applet/getActivityQrCode"];
const service = axios.create({
  timeout: 20000 // 请求超时时间
});
// service.defaults.headers["Content-type"] = "multipart/form-data";
// request拦截器
service.interceptors.request.use(
  config => {
    config.headers.platform = "PC";
    if (config.headers.responseType) {
      config.responseType = config.headers.responseType;
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    console.log(11, response);
    if (response && response.data) {
      if (response.data.code !== 200) {
        // Message({
        //     showClose: true,
        //     message: response.data.desc,
        //     type: "warning",
        //     duration: 3 * 1000
        //   });
        return Promise.reject(response);
      } else {
        return response.data;
      }
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
