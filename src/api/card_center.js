/**
 * by limingang 2019/4/9
 * 添加了卡券中心的api接口列表
 **/
import request from "@/utils/request";
import config from "@/config";

// 批量增加url前缀
// 增加实例 核销码校验
const urlList = ["addInstance", "checkImportInfo"];
const url_prefix = "/cardticket/";
const cardticket = {
  urlList,
  url_prefix
};
urlList.forEach(function(t) {
  const apiurl = config.BASE_API + url_prefix + t;
  cardticket[t] = (para, method) => {
    var opt = {
      url: apiurl,
      method: method || "POST"
    };
    if (para.pageSize >= 10000) {
      opt.timeout = 0;
    }
    if (para.timeout) {
      delete para.timeout;
      opt.timeout = 0;
    }
    opt[/^get$/gi.test(method) ? "params" : "data"] = para || {};
    return request(opt);
  };
});
console.log(cardticket);
export default cardticket;
