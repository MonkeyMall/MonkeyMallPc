import request from "@/utils/request";
import config from "@/config/news";
//
const BASE = process.env.NODE_ENV === 'development' ? config.BASE_API : process.env.VUE_APP_API_NEWS
export const urlMap = {
  appletPostList: "/posts/appletPostList", // 列表
  appletPostDetail: "/posts/appletPostDetail" // 详情
};
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = BASE + urlMap[key];
});

// 新闻列表
export function appletPostList(para) {
  return request({
    url: urlMap["appletPostList"],
    method: "get",
    params: para
  });
}
// 新闻详情
export function appletPostDetail(para) {
  return request({
    url: urlMap["appletPostDetail"],
    method: "get",
    params: para
  });
}