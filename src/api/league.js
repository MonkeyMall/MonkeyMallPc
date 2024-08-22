import request from "@/utils/request";
import config from "@/config";
//
export const urlMap = {
  sendCode: "/os/dealer/sendCode",
  apply: "/os/dealer/apply"
};
// console.log('环境', process.env)
const BASE = process.env.NODE_ENV === 'development' ? config.BASE_API_LEAGUE : process.env.VUE_APP_BASE_API_LEAGUE
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = BASE + urlMap[key];
});

// 发送验证码
export function sendCode(data) {
  return request({
    url: urlMap['sendCode'],
    method: "POST",
    data
  });
}
// 申请加盟
export function apply(data) {
  return request({
    url: urlMap['apply'],
    method: "POST",
    data
  });
}
