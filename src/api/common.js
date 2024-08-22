import request from "@/utils/request";
import config from "@/config/index";
//
export const urlMap = {
  dictList: "data/dict" // 字典
};
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = config.BASE_API + urlMap[key];
});

// 字典列表
export function dict_list(para) {
  return request({
    url: urlMap["dictList"],
    method: "get",
    params: para
  });
}
