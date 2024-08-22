const config = {
  // 修改成/mockapi会走本地的反向代理
  // BASE_API:'https://zhixing.wm-imotor.com/zhixing/', /* 生产环境*/
  // BASE_API:'https://qa-zhixing.wmmotors.cn/zhixing/' /* QA环境*/
  BASE_API:'https://test-zhixing.wmmotors.cn/zhixing/', /* 测试环境*/
  // BASE_APIS:'https://test-os.wmmotors.cn/' /* 测试环境*/
  // BASE_API:'https://zhixing.wmmotors.cn/zhixing/' /* 开发环境*/

  // BASE_APIS:'https://test-os.wmmotors.cn' /* 测试环境*/
  BASE_API_BANNER: '/bannerApi',
  BASE_API_LEAGUE: '/leagueApi',
  BASE_API_ZHIXING: process.env.VUE_APP_BASE_API_ZHIXING
}

export default config
