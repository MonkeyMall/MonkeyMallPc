console.log('环境',process.env.NODE_ENV === 'production')
export default {
    Resource: process.env.NODE_ENV === 'production' ? 'https://cos-data.wm-imotor.com/website/' : 'https://smc-devops-dev-1256914302.cos.ap-shanghai.myqcloud.com/website/', /* 静态图片资源地址*/
    zhiXingHost: process.env.NODE_ENV === 'production' ? 'https://www.wm-imotor.com/' : 'https://apptest.wm-imotor.com/'
}
