import Vue from "vue";
import Vuex from "vuex";
import { 
  userLogin,
  userInfo
} from '@/api/index'
import {
  getItem
} from '@/utils/storage.js'
import { setItem, removeItem } from '@/utils/storage.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: getItem('userInfo') ? getItem('userInfo') : null,
    searchText: ''
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    }
  },
  mutations: {
    SET_USERINFO(state, payload) {
      state.userInfo = payload;
    },
    LOGIN_OUT(state) {
      state.userInfo = null;
      removeItem('userInfo')
    },
    SET_SEARCHTEXT(state, payload) {
      state.searchText = payload
    }
  },
  actions: {
    // 登录
    user_login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        userLogin(userInfo).then(res => {
          let data = res.data
          // setToken(data.access_token)
          commit('SET_USERINFO', data)
          setItem('userInfo', data)
          
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 退出登录
    // user_login_out({ commit }, userInfo) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_USERINFO', data)
    //     setItem('userInfo', data)
    //   })
    // },
    // 获取用户信息
    get_user_info({ commit }) {
      return new Promise((resolve, reject) => {
        userInfo().then(res => {
          console.log('用户信息', res)
          let data = res.userInfo
          commit('SET_USERINFO', data)
          setItem('userInfo', data)
          
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
});
