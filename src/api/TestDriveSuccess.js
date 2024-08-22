import request from "@/utils/request";
import config from "@/config";
export const urlMap = {
  configInfo: "community/configInfo"
};
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = config.BASE_API_ZHIXING + urlMap[key];
});

// 预约试驾
export function configInfo(para) {
  return request({
    url: urlMap["configInfo"],
    method: "get",
    params: para,
    headers: {
      version: '1.0.0'
    }
  });
}