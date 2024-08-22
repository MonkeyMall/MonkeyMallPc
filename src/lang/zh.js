import Resource from "@/config/resource";

export default {
  fixedWindow: [
    {
      icon: `${Resource.Resource}service-customer.png`,
      name: "专属客服",
      dia: true
    },
    {
      icon: `${Resource.Resource}onLine.png`,
      name: "咨询",
      dia: false
    },
    {
      icon: `${Resource.Resource}/phone.png`,
      name: "4006-999-666",
      dia: false
    },
    {
      icon: `${Resource.Resource}calculator.png`,
      name: "金融服务",
      type: "change",
      dia: false
    }
  ],
  TestDrive: "预约试驾",
  menuList: [
    {
      name: "M7",
      url: "/M7",
      type: "router"
    },
    {
      name: "W6",
      url: "/W6",
      type: "router"
    },
    {
      name: "EX5-Z",
      url: "/EX-5",
      type: "router"
    },
    {
      name: "E.5",
      url: "/E.5",
      type: "router"
    },
    {
      name: "大客户销售",
      url: "",
      children: [
        {
          name: "EX5",
          url: "/EX-5-JKX",
          type: "router"
        },
        {
          name: "E.5",
          url: "/E5",
          type: "router"
        }
      ]
    },
    {
      name: "成为车主",
      url: "",
      children: [
        {
          name: "立即订购",
          url: "/Reserve",
          type: "router"
        },
        {
          name: "门店查询",
          url: "https://official.wm-motor.com/network.html",
          type: "link"
        },
        {
          name: "金融服务",
          url: "/FinancialCalculator",
          type: "router"
        },
        {
          name: "车主尊享",
          url: "/AfterSaleService",
          type: "router"
        },
        {
          name: "购买渠道公告",
          url: "https://official.wm-motor.com/news/detail/338.html",
          type: "link"
        },
        {
          name: "动力电池回收",
          url: "https://official.wm-motor.com/batteryrecycle.html",
          type: "link"
        }
      ]
    },
    /*{
      name: "充电",
      url: "",
      children: [
        {
          name: "充电服务",
          url: "",
          type: "link"
        },
        {
          name: "即客行",
          url: "",
          type: "link"
        }
      ]
    },*/
    {
      name: "了解小宋",
      url: "",
      children: [
        {
          name: "关于小宋",
          url: "https://official.wm-motor.com/brand.html",
          type: "link"
        },
        {
          name: "小宋智造",
          url: "https://official.wm-motor.com/plant.html",
          type: "link"
        },
        {
          name: "品牌中心",
          url: "https://brand.wm-motor.com/",
          type: "link"
        },
        {
          name: "品牌活动",
          url: "https://official.wm-motor.com/activities.html",
          type: "link"
        },
        {
          name: "新闻资讯",
          url: "/News",
          type: "router"
        },
        {
          name: "媒体下载",
          url: "https://official.wm-motor.com/download/pictures.html",
          type: "link"
        }
      ]
    },
    {
      name: "联系我们",
      url: "",
      children: [
        {
          name: "成为智行合伙人",
          url: "/league",
          type: "router"
        },
        {
          name: "WeCLUB",
          url: "https://official.wm-motor.com/fanclub.html",
          type: "link"
        },
        {
          name: "联系我们",
          url: "https://official.wm-motor.com/contactus.html",
          type: "link"
        },
        {
          name: "专属顾问",
          url: "/counselor",
          type: "router"
        }
      ]
    },
    {
      name: "加入我们",
      url: "https://www.wintalent.net/wt/wmmotor/web/index/social?brandCode=1",
      type: "link"
    },
    {
      name: "预约试驾",
      url: "/TestDrive",
      type: "router"
    }
  ],
  footerMenuList: {
    leftList: [
      {
        name: "探索小宋"
      },
      {
        name: "品牌故事",
        type: "link",
        url: "https://official.wm-motor.com/brand.html"
      },
      {
        name: "小宋制造",
        type: "link",
        url: "https://official.wm-motor.com/plant.html"
      },
      {
        name: "品牌活动",
        type: "link",
        url: "https://official.wm-motor.com/activities.html"
      } /*,
      {
        name: "WeCLUB",
        type: "link",
        url: "https://official.wm-motor.com/fanclub.html"
      }*/
    ],
    rightList: [
      {
        name: "携手小宋"
      },
      {
        name: "成为智行合伙人",
        type: "link",
        url: "https://official.wm-motor.com/investment.html"
      },
      {
        name: "WeCLUB小宋车友俱乐部",
        type: "link",
        url: "https://official.wm-motor.com/fanclub.html"
      },
      {
        name: "加入我们",
        type: "link",
        url: "https://www.wintalent.net/wt/wmmotor/web/index/social?brandCode=1"
      }
    ]
  },
  commonSet: {
    moreConfig: "查看配置",
    seeMore: "了解更多"
  }
};
