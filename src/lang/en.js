import Resource from "@/config/resource";

export default {
  fixedWindow: [
    /*{
      icon: require("@/static/onLine.png"),
      name: "Inquiry"
    },*/
    {
      icon: `${Resource.Resource}/phone.png`,
      name: "4006-999-666",
      dia: true
    } /*,
    {
      icon: require("@/static/calculator.png"),
      name: "Financing",
      type: "change"
    }*/
  ],
  TestDrive: "Test drive",
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
    /*{
      name: "E.5",
      url: "/E.5",
      type: "router"
    },*/
    {
      name: "Key Account",
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
      name: "Purchase",
      url: "",
      children: [
        {
          name: "Online Order",
          url: "/Reserve",
          type: "router"
        },
        {
          name: "WM Store",
          url: "https://official.wm-motor.com/en/network.html",
          type: "link"
        },
        /*{
          name: "Financing",
          url: "/FinancialCalculator",
          type: "router"
        },
        {
          name: "Ownership Benefits",
          url: "/AfterSaleService",
          type: "router"
        },*/
        {
          name: "Notice",
          url: "https://official.wm-motor.com/en/news/detail/368.html",
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
      name: "About WM",
      url: "",
      children: [
        {
          name: "About WM",
          url: "https://official.wm-motor.com/en/brand.html",
          type: "link"
        },
        {
          name: "WM Manufacturing",
          url: "https://official.wm-motor.com/en/plant.html",
          type: "link"
        },
        /*{
          name: "Brand library",
          url: "https://brand.wm-motor.com/",
          type: "link"
        },
        {
          name: "Brand events",
          url: "https://official.wm-motor.com/activities.html",
          type: "link"
        },*/
        {
          name: "Newsroom",
          url: "/News",
          type: "router"
        },
        {
          name: "Media Center",
          url: "https://official.wm-motor.com/en/download/pictures.html",
          type: "link"
        }
      ]
    },
    {
      name: "Contact",
      url: "https://official.wm-motor.com/en/contactus.html",
      type: "link"
    }
    /*{
      name: "Contact",
      url: "",
      children: [
        /!*{
          name: "Distributors",
          url: "https://official.wm-motor.com/investment.html",
          type: "link"
        },
        {
          name: "WeCLUB",
          url: "https://official.wm-motor.com/fanclub.html",
          type: "link"
        },*!/
        {
          name: "Contact",
          url: "https://official.wm-motor.com/en/contactus.html",
          type: "link"
        }
      ]
    },*/
    /*{
      name: "Join Us",
      url: "https://www.wintalent.net/wt/wmmotor/web/index/social?brandCode=1",
      type: "link"
    },
    {
      name: "Test Drive",
      url: "/TestDrive",
      type: "router"
    }*/
  ],
  footerMenuList: {
    leftList: [
      {
        name: "Explore WM"
      },
      {
        name: "About WM",
        type: "link",
        url: "https://official.wm-motor.com/en/brand.html"
      },
      {
        name: "WM Manufacturing",
        type: "link",
        url: "https://official.wm-motor.com/en/plant.html"
      } /*,
      {
        name: "Brand events",
        type: "link",
        url: "https://official.wm-motor.com/activities.html"
      }*/
    ],
    rightList: [
      /*{
        name: "Distributors",
        type: "link",
        url: "https://official.wm-motor.com/investment.html"
      },
      {
        name: "WeClub",
        type: "link",
        url: "https://official.wm-motor.com/fanclub.html"
      },
      {
        name: "Join Us",
        type: "link",
        url: "https://www.wintalent.net/wt/wmmotor/web/index/social?brandCode=1"
      }*/
    ]
  },
  commonSet: {
    moreConfig: "configurations",
    seeMore: "Explore More"
  },
}
