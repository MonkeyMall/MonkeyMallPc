import request from "@/utils/request";
import config from "@/config";
//
export const urlMap = {
  companyList: "/api/company/list",
};
// console.log('环境', process.env)
const BASE = process.env.NODE_ENV === 'development' ? config.BASE_API_BANNER : process.env.VUE_APP_BASE_API_BANNER
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
    urlMap[key] = urlMap[key];
    // urlMap[key] = BASE + urlMap[key];
});

export function companyList(params) {
    return request({
        url: urlMap['companyList'],
        method: "get",
        params
    });
}
