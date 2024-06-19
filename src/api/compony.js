import axios from "@/utils/axios";

/**
 * 公司相关
 */
export function addCompony(params) {
	return axios({
		url: "/company/add",
		method: "post",
		data: params
	});
}

export function editCompony(params) {
	return axios({
		url: "/company/edit",
		method: "post",
		data: params
	});
}

export function listCompony(params) {
	return axios({
		url: "/company/list",
		method: "get",
		params
	});
}

export function listUser(params) {
	return axios({
		url: "/user/list",
		method: "get",
		params
	});
}

/**
 * 侃言相关
 */
export function addRidicule(params) {
	return axios({
		url: "/ridicule/add",
		method: "post",
		data: params
	});
}

export function editRidicule(params) {
	return axios({
		url: "/ridicule/edit",
		method: "post",
		data: params
	});
}

export function listRidicule(params) {
	return axios({
		url: "/ridicule/list",
		method: "get",
		params
	});
}

export function addCommentRidicule(params) {
	return axios({
		url: "/comment/add",
		method: "post",
		data: params
	});
}

export function listCommentRidicule(params) {
	return axios({
		url: "/comment/commentList",
		method: "post",
		data: params
	});
}