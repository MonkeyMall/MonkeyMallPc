import request from "@/utils/request";
import config from "@/config";
// 车型定价
export const urlMap = {
  // 车型列表界面-初始化数据
  vehicles_data_init: "/vehicles/data/init",
  // 获取车型列表
  vehicles: "/vehicle/vehicles",
  // 车型上下架操作
  vehicle_salestatus_id_status: "/vehicle/salestatus/edit",
  // 车型生效校验
  model_effective_check_id: "/vehicle/effective/check",
  // 车型上架校验
  model_onsale_check_id: "/vehicle/onsale/check",
  // 车型生效/失效操作
  vehicle_validstatus_id_status: "/vehicle/validstatus/edit",
  // 设置车型权限
  vehicle_permission: "/vehicle/permission",
  // 添加车型配置亮点
  vehicle_config_highlight_id: "/vehicle/config/highlight",
  // 获取车型配置亮点数据信息
  vehicle_config_highlights_id: "/vehicle/config/highlights",
  // 获取de001id
  getDe001ids: "/vehicle/de001Ids",
  // 根据de001_id查询变量车型信息
  getVariantInfo: "/vehicle/de001Id/variantInfo",
  // 根据de001Id + 变量车型查询车型信息
  getVehicleInfos: "/vehicle/de001Id/variant",
  // 根据车型查询价格+电池信息
  getBatteryByvehicle: "/order/vehicle/battery",
  // 订单获取车型+选装包+配套项信息
  getInfosByOrder: "/vehicle/order/infos",
  // 获取上架车型名称
  getVehicleName: "/vehicle/vehicleNames/onsale",
  // 获取所有状态的工程车型信息
  vehicle_vehicleCodes: "/vehicle/vehicleCodes",
  // 根据工程车型获取对应的销售策略编码和版本信息
  vehicle_strategyCodeAndVersions: "/vehicle/strategyCodeAndVersions",
  // 根据VSV 获取 对应的变量车 信息
  vehicle_variantVehicles: "/vehicle/variantVehicles",
  // 获取 所有状态车型的电池续航 信息
  vehicle_variantVehicle_batteryLives: "/vehicle/variantVehicle/batteryLives",
  // 导出车型列表数据
  vehicle_export: "/vehicle/export",
  // 保存车型关联的门店信息
  vehicle_smp_attach: "/vehicle/smp/attach",
  // 添加车型售卖限制弹框界面初始化数据
  vehicle_smp_editUI: "/vehicle/smp/editUI",
  // 导入车型关联的门店信息
  vehicle_smp_attachImport: "/vehicle/smp/attachImport",
  // 查看售卖门店
  vehicle_smp_list: "/vehicle/smp/list",
  // 导出当前门店限制
  vehicle_smp_export: "/vehicle/smp/export"
};
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = config.BASE_API + urlMap[key];
});

// 获取车型列表
export function vehicles(para) {
  return request({
    url: urlMap["vehicles"],
    method: "post",
    data: para
  });
}
// 车型上下架操作
export function vehicle_salestatus_id_status(para) {
  return request({
    url: urlMap["vehicle_salestatus_id_status"],
    method: "post",
    data: para
  });
}

// 车型列表界面-初始化数据
export function vehicles_data_init(para) {
  return request({
    url: urlMap["vehicles_data_init"],
    method: "get"
  });
}

// 车型生效/失效操作
export function vehicle_validstatus_id_status(para) {
  return request({
    url: urlMap["vehicle_validstatus_id_status"],
    method: "post",
    data: para
  });
}
// 车型生效/失效操作
export function vehicle_permission(para) {
  return request({
    url: urlMap["vehicle_permission"],
    method: "post",
    data: para
  });
}

// 车型生效校验
export function model_effective_check_id(para) {
  return request({
    url: urlMap["model_effective_check_id"],
    method: "get",
    params: para
  });
}

// 车型上架校验
export function model_onsale_check_id(para) {
  return request({
    url: urlMap["model_onsale_check_id"],
    method: "post",
    data: para
  });
}

// 获取车型配置亮点数据信息
export function vehicle_config_highlights_id(para) {
  return request({
    url: urlMap["vehicle_config_highlights_id"] + `/${para.id}`,
    method: "get"
  });
}

// 添加车型配置亮点
export function vehicle_config_highlight_id(para) {
  return request({
    url: urlMap["vehicle_config_highlight_id"] + `/${para.id}`,
    method: "post",
    data: para.data
  });
}

// 获取de001id
export function getDe001ids(para) {
  return request({
    url: urlMap["getDe001ids"],
    method: "get",
    params: para
  });
}

// 根据de001_id查询变量车型信息
export function getVariantInfo(para) {
  return request({
    url: urlMap["getVariantInfo"],
    method: "get",
    params: para
  });
}
// 根据de001Id + 变量车型查询车型信息
export function getVehicleInfos(para) {
  return request({
    url: urlMap["getVehicleInfos"],
    method: "get",
    params: para
  });
}
// 根据车型查询价格+电池信息
export function getBatteryByvehicle(para) {
  return request({
    url: urlMap["getBatteryByvehicle"],
    method: "get",
    params: para
  });
}
// 订单获取车型+选装包+配套项信息
export function getInfosByOrder(para) {
  return request({
    url: urlMap["getInfosByOrder"],
    method: "post",
    data: para
  });
}
// 订单获取车型+选装包+配套项信息
export function getVehicleName(para) {
  return request({
    url: urlMap["getVehicleName"],
    method: "get",
    params: para
  });
}

// 获取上架状态的工程车型信息
export function vehicle_vehicleCodes(para) {
  return request({
    url: urlMap["vehicle_vehicleCodes"],
    method: "GET",
    params: para
  });
}
// 根据工程车型获取上架的销售策略编码和版本信息
export function vehicle_strategyCodeAndVersions(para) {
  return request({
    url: urlMap["vehicle_strategyCodeAndVersions"],
    method: "GET",
    params: para
  });
}
// 根据VSV 获取 上架变量车 信息
export function vehicle_variantVehicles(para) {
  return request({
    url: urlMap["vehicle_variantVehicles"],
    method: "GET",
    params: para
  });
}
// 获取 所有上架状态车型的电池续航 信息
export function vehicle_variantVehicle_batteryLives(para) {
  return request({
    url: urlMap["vehicle_variantVehicle_batteryLives"],
    method: "GET",
    params: para
  });
}
// 导出车型列表数据
export function vehicle_export(para) {
  return request({
    url: urlMap["vehicle_export"],
    method: "POST",
    data: para
  });
}
// 保存车型关联的门店信息
export function vehicle_smp_attach(para) {
  return request({
    url: urlMap["vehicle_smp_attach"],
    method: "POST",
    data: para
  });
}
// 添加车型售卖限制弹框界面初始化数据
export function vehicle_smp_editUI(para) {
  return request({
    url: urlMap["vehicle_smp_editUI"],
    method: "GET",
    params: para
  });
}
// 导入车型关联的门店信息
export function vehicle_smp_attachImport(para) {
  return request({
    url: urlMap["vehicle_smp_attachImport"],
    method: "POST",
    data: para
  });
}
// 查看售卖门店
export function vehicle_smp_list(para) {
  return request({
    url: urlMap["vehicle_smp_list"],
    method: "GET",
    params: para
  });
}
// 导出当前门店限制
export function vehicle_smp_export(para) {
  return request({
    url: urlMap["vehicle_smp_export"],
    method: "GET",
    params: para
  });
}
