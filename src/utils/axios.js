import axios from "axios";
import store from "@/store";
import { ElMessage } from "element-plus";
import {
	VERSION,
	MODEL_TEST_VERSION,
	SERVER_TYPE,
	AXIOS_TIMEOUT

} from "@/constant";

import { switchServerUrl } from "@/utils/index";

/**
 * axios请求拦截器
 * @param {object} config axios请求配置对象
 * @return {object} 请求成功或失败时返回的配置对象或者promise error对象
 **/
axios.interceptors.request.use(config => {
	return config;
}, error => {
	return Promise.reject(error);
});

/**
 * axios 响应拦截器
 * @param {object} response 从服务端响应的数据对象或者error对象
 * @return {object} 响应成功或失败时返回的响应对象或者promise error对象
 **/
axios.interceptors.response.use(response => {
	return response;
}, error => {
	return Promise.reject(error);
});

export default function http(options) {
	// 获取不同环境的请求域名
	const server_url = switchServerUrl();

	let opt = {};
	const method = options.method || "post";
	const url = options.url;
	const data = options.data || {};
  console.log(11, options)
	if (!options.url) {
		console.error("url参数缺失");
		return;
	}
	if (store.getters.token) {
		data.sys_token = store.getters.token;
	}
	if (method == "get") {
		opt = {
			method,
			baseURL: "",
			url: url.indexOf("//") > -1 ? url : (server_url + url),
			params: options.params,
			timeout: AXIOS_TIMEOUT,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
		};
	} else if (method == "post") {
		opt = {
			method,
			baseURL: "",
			url: url.indexOf("//") > -1 ? url : (server_url + url),
			data, // qs.stringify(data)
			timeout: AXIOS_TIMEOUT,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
		};
	}
	return new Promise((resolve, reject) => {
		axios(opt).then(res => {
      res = res.data
      console.log('返回数据', res)
			if (res && (res.code === 200 || res.code === 304 || res.code === 400 || res.code === 501)) {
				const {code, data, message} = res;
				if (code == 200) {
					resolve(res);
				} else if (code && (code == 501)) { // 501 未登录
					ElMessage.error(message); // 提示错误信息
					// 登出操作
					store.dispatch("user/logout");
				} else {
					ElMessage.error(message || "网络异常，请稍后重试！"); // 提示错误信息
					reject(data);
				}
			} else {
				ElMessage.error(res || "网络异常，请稍后重试！"); // 提示错误信息
				reject("网络异常，请稍后重试");
			}
		}, err => {
			ElMessage.error(err); // 提示错误信息
			reject(err);
		});
	});
}