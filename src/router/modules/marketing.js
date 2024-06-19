/** When your routing table is too long, you can split it into small modules**/

import layout from "@/layout";

export default [
  {
    path: "/marketing",
    component: layout,
    name: "marketing",
    meta: {
      title: "营销管理",
      icon: "article"
    },
    children: [
      {
        path: "/banner/index",
        component: () => import("@/views/marketing/banner/index.vue"),
        name: "bannerList",
        meta: {
          title: "banner管理", icon: "article-ranking"
        }
      }
    ]
  },{
    path: "/compony",
    component: layout,
    redirect: "/compony/index",
    alwaysShow: true, // will always show the root menu
    name: "compony",
    meta: {
      title: "公司管理",
      icon: "article"
    },
    children: [
      {
        path: "/compony/index",
        component: () => import("@/views/compony/index.vue"),
        name: "componyList",
        meta: {
          title: "公司列表", icon: "article-ranking"
        }
      }
    ]
  },{
    path: "/ridicule",
    component: layout,
    redirect: "/ridicule/index",
    alwaysShow: true, // will always show the root menu
    name: "ridicule",
    meta: {
      title: "侃言管理",
      icon: "article"
    },
    children: [
      {
        path: "/ridicule/index",
        component: () => import("@/views/ridicule/index.vue"),
        name: "ridiculeList",
        meta: {
          title: "侃言列表", icon: "article-ranking"
        }
      },
      {
        path: "/ridicule/info/list",
        component: () => import("@/views/ridicule/info/list.vue"),
        name: "ridiculeInfoList",
        meta: {
          title: "侃言评论列表", icon: "article-ranking"
        },
        hidden: true
      }
    ]
  },{
    path: "/shopping",
    component: layout,
    redirect: "/shopping/index",
    alwaysShow: true, // will always show the root menu
    name: "shopping",
    meta: {
      title: "商场管理",
      icon: "article"
    },
    children: [
      {
        path: "/shopping/index",
        component: () => import("@/views/shopping/index.vue"),
        name: "shoppingList",
        meta: {
          title: "商品列表", icon: "article-ranking"
        }
      }
    ]
  },{
    path: "/finance",
    component: layout,
    redirect: "/finance/user",
    alwaysShow: true, // will always show the root menu
    name: "finance",
    meta: {
      title: "财务管理",
      icon: "article"
    },
    children: [
      {
        path: "/finance/user",
        component: () => import("@/views/finance/user.vue"),
        name: "financeUser",
        meta: {
          title: "用户管理", icon: "article-ranking"
        }
      },
      {
        path: "/finance/order",
        component: () => import("@/views/finance/order.vue"),
        name: "financeOrder",
        meta: {
          title: "订单管理", icon: "article-ranking"
        }
      }
    ]
  },{
    path: "/system",
    component: layout,
    redirect: "/system/gs",
    alwaysShow: true, // will always show the root menu
    name: "system",
    meta: {
      title: "系统管理",
      icon: "article"
    },
    children: [
      {
        path: "/gs",
        component: () => import("@/views/system/gs.vue"),
        name: "systemGs",
        meta: {
          title: "公司分类", icon: "article-ranking"
        }
      },
      {
        path: "/sp",
        component: () => import("@/views/system/sp.vue"),
        name: "systemSp",
        meta: {
          title: "商品分类", icon: "article-ranking"
        }
      }
    ]
  }
];