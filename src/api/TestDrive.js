import request from "@/utils/request";
import config from "@/config";
//
export const urlMap = {
  data_cityList: "data/cityList",
  data_drive_page: "data/drivePage",
  send_code_quick: 'sms/sendCodeQuick',
  // drive_subscribe_car_type: 'drive/subscribeCarType',
  drive_subscribe_car_type: 'drive/tocrm/subscribe', /* 新版预约试驾接口*/
  smp_list_by_drive_city: 'data/smpListByDriveCity',
  data_imToken: 'data/imToken'
};
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = config.BASE_API_ZHIXING + urlMap[key];
});

// 预约试驾
export function data_drive_page(para) {
  return request({
    url: urlMap["data_drive_page"],
    method: "get",
    params: para
  });
}
// 省市区联动
export function data_cityList(para) {
  return request({
    url: urlMap["data_cityList"],
    method: "get",
    params: para
  });
}
//根据城市或定位查询门店信息
export function smpList_ByDriveCity(para) {
  return request({
    url: urlMap["smp_list_by_drive_city"],
    method: "get",
    params: para
  });
}
//发送验证码
export function send_code_quick(para) {
  return request({
    url: urlMap["send_code_quick"],
    method: "post",
    data: para
  });
}
//提交预约试驾
export function drive_subscribe_car_type(para) {
  return request({
    url: urlMap["drive_subscribe_car_type"],
    method: "post",
    data: para
  });
}
//在线客服
export function data_imToken(para) {
  return request({
    url: urlMap["data_imToken"],
    method: "get",
    params: para
  });
}
