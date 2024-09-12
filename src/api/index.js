import request from "@/utils/request";
import config from "@/config";
//
export const urlMap = {
  userLogin: "/api/user/login",
  userInfo: "/api/user/info",
  companyList: "/api/company/list",
  ridiculeList: "/api/ridicule/list",
  ridiculeCommentList: "/api/comment/commentList"
};
// console.log('环境', process.env)
const BASE = process.env.NODE_ENV === 'development' ? config.BASE_API_BANNER : process.env.VUE_APP_BASE_API_BANNER
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
    urlMap[key] = urlMap[key];
    // urlMap[key] = BASE + urlMap[key];
});

export function userInfo(params) {
  return request({
    url: urlMap['userInfo'],
    method: "get",
    params
  });
}

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

export function ridiculeCommentList(params) {
  return request({
    url: urlMap['ridiculeCommentList'],
    method: 'post',
    data: params
  })
}

// 调侃评论
export function addCommentRidicule(params) {
	return request({
		url: "/api/comment/add",
		method: "post",
		data: params
	})
}

// 调侃创建
export function addRidicule(params) {
	return request({
		url: "/api/ridicule/add",
		method: "post",
		data: params
	});
}

// 我的侃言列表
export function getRidiculeMyList(query) {
  return request({
    url: '/api/ridicule/my/list',
    method: 'get',
    params: query
  })
}

// 公司详情
export function getComponyInfo(query) {
  return request({
    url: '/api/compony/info',
    method: 'get',
    params: query
  })
}

// 公司评论列表
export function getCommentsComponyList(query) {
  return request({
    url: '/api/commentsCompony/list',
    method: 'get',
    params: query
  })
}

// 添加公司评论
export function setCommentsComponyAdd(params) {
  return request({
    url: '/api/commentsCompony/add',
    method: "post",
		data: params
  })
}

// 用户收藏公司
export function commentsCollect(params) {
  return request({
    url: '/api/compony/collect',
    method: "post",
		data: params
  })
}

// 注册
export function register(params) {
	return request({
		url: "/api/user/register",
		method: "post",
		data: params
	});
}

// 用户收藏调侃
export function ridiculeCollent(params) {
	return request({
		url: "/api/ridicule/collect",
		method: "post",
		data: params
	});
}

// 用户收藏调侃列表
export function getRidiculeCollentList(query) {
  return request({
    url: '/api/ridicule/collect/list',
    method: 'get',
    params: query
  })
}
// 查询指定用户是否收藏了指定调侃
export function getRidiculeIsCollent(query) {
  return request({
    url: '/api/ridicule/collect/isCollect',
    method: 'get',
    params: query
  })
}

// 调侃阅读量
export function setRidiculeView(query) {
  return request({
    url: '/api/ridicule/view',
    method: 'get',
    params: query
  })
}

// 留言
export function liuyanAdd(params) {
	return request({
		url: "/api/liuyan/add",
		method: "post",
		data: params
	});
}

export function liuyanList(query) {
  return request({
    url: '/api/liuyan/list',
    method: 'get',
    params: query
  })
}

// 备忘录
export function noteBookAdd(params) {
	return request({
		url: "/api/noteBook/add",
		method: "post",
		data: params
	});
}

export function noteBookList(query) {
  return request({
    url: '/api/noteBook/list',
    method: 'get',
    params: query
  })
}
// 用户收藏备忘录列表
export function noteBookCollenctList(query) {
  return request({
    url: '/api/noteBook/collenct/list',
    method: 'get',
    params: query
  })
}

// 用户收藏备忘录
export function notebookCollent(params) {
	return request({
		url: "/api/notebook/collect",
		method: "post",
		data: params
	});
}
// 查询指定用户是否收藏了指定备忘录
export function getNoteBookIsCollent(query) {
  return request({
    url: '/api/NoteBook/collect/isCollect',
    method: 'get',
    params: query
  })
}
// 备忘录状态修改
export function notebookStatus(params) {
	return request({
		url: "/api/notebook/status",
		method: "post",
		data: params
	});
}