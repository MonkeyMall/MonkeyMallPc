import request from "@/utils/request";
import config from "@/config";
//
export const urlMap = {
  userLogin: "/api/user/login",
  companyList: "/api/company/list",
  ridiculeList: "/api/ridicule/list",
};
// console.log('环境', process.env)
const BASE = process.env.NODE_ENV === 'development' ? config.BASE_API_BANNER : process.env.VUE_APP_BASE_API_BANNER
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
    urlMap[key] = urlMap[key];
    // urlMap[key] = BASE + urlMap[key];
});

export function userLogin(para) {
  return request({
    url: urlMap["userLogin"],
    method: "post",
    data: para
  });
}

export function companyList(params) {
  return request({
      url: urlMap['companyList'],
      method: "get",
      params
  });
}

// 侃言列表
export function getRidiculeList(params) {
  return request({
    url: urlMap['ridiculeList'],
    method: 'get',
    params
  })
}
