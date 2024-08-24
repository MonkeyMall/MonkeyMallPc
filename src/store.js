import Vue from "vue";
import Vuex from "vuex";
import { userLogin } from '@/api/banner'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    location: { /* 试驾预用户地理位置*/
      longitude: "",
      latitude: ""
    },
    customerService: false, /* 在线客服*/
    language: localStorage.getItem('language') || 'zh', /* 语言切换*/
    dialogStatus: false, /* 全局dialog*/
    currentDialog: '' /* 当前dialog内容*/
  },
  mutations: {
    UPDATE_LOCATION(state, payload) {
      state.location = payload.location;
    },
    UPDATE_CUSTOMER_SERVICE(state, payload) {
      state.customerService = payload.customerService;
    },
    UPDATE_LANGUAGE(state, payload) {
      state.language = payload.language
    },
    UPDATE_DIALOG_STATUS(state, payload) {
      state.dialogStatus = payload.dialogStatus
    },
    UPDATE_CURRENT_DIALOG(state,payload) {
      state.currentDialog = payload.currentDialog
    }
  },
  actions: {
    user_login({ commit }, userInfo) {
      console.log('走了')
      const username = userInfo.username.trim()
      const password = userInfo.password
      const code = userInfo.code
      const uuid = userInfo.uuid
      return new Promise((resolve, reject) => {
        userLogin(userInfo).then(res => {
          let data = res.data
          console.log('登录参数', res)
          // setToken(data.access_token)
          // commit('SET_TOKEN', data.access_token)
          // setExpiresIn(data.expires_in)
          // commit('SET_EXPIRES_IN', data.expires_in)
          resolve(res.data)
        }).catch(error => {
          reject(error)
        })
      })
      commit("UPDATE_LOCATION", data);
    },
    update_customer_service({ commit }, data) {
      commit("UPDATE_CUSTOMER_SERVICE", data);
    },
    update_language({commit}, data) {
      commit("UPDATE_LANGUAGE", data)
    },
    update_dialog_status({commit}, data) {
      commit("UPDATE_DIALOG_STATUS", data)
    },
    update_current_dialog({commit}, data) {
      commit("UPDATE_CURRENT_DIALOG", data)
    }
  }
});
