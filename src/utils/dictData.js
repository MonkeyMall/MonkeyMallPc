const categoryOptions = [{
  label: '心灵鸡汤',
  value: '1'
}, {
  label: '生活感悟',
  value: '2'
}, {
  label: '职场感悟',
  value: '3'
}, {
  label: '职业规划',
  value: '4'
}, {
  label: '阅读心得',
  value: '5'
}, {
  label: '求助消息',
  value: '7'
}, {
  label: '前沿科技',
  value: '8'
}, {
  label: '技术分享',
  value: '9'
}, {
  label: '军事科技',
  value: '10'
}, {
  label: '其他',
  value: '6'
}]
const overTimeOptions = [
  {
    label: '暂无',
    value: '0'
  },
  {
    label: '双休',
    value: '1'
  },
  {
    label: '弹性工作',
    value: '2'
  },
  {
    label: '偶尔加班',
    value: '3'
  },
  {
    label: '不加班',
    value: '4'
  },
  {
    label: '排班轮休',
    value: '5'
  }
]
const scaleList = [{
  label: '0-20人',
  value: '0-20人'
}, {
  label: '20-99人',
  value: '20-99人'
}, {
  label: '100-499人',
  value: '100-499人'
}, {
  label: '1000-9999人',
  value: '1000-9999人'
}, {
  label: '10000人以上',
  value: '10000人以上'
}]
const isOrYesOptions = [{
  label: '是',
  value: '1'
}, {
  label: '否',
  value: '0'
}]
const financingOptions = [{
  label: '未融资',
  value: '1'
}, {
  label: '不需要融资',
  value: '8'
},
{
  label: '天使轮',
  value: '1'
}, {
  label: 'A轮',
  value: '2'
}, {
  label: 'B轮',
  value: '3'
}, {
  label: 'C轮',
  value: '4'
}, {
  label: 'D轮',
  value: '5'
}, {
  label: 'E轮',
  value: '6'
}, {
  label: '已上市',
  value: '7'
}]
// 
const welfareOptions = [{
  label: '交通补助',
  value: '1'
}, {
  label: '生日福利',
  value: '2'
}, {
  label: '节日福利',
  value: '3'
}, {
  label: '生日福利',
  value: '4'
}, {
  label: '团建聚餐',
  value: '5'
}, {
  label: '零食下午茶',
  value: '6'
}, {
  label: '餐补',
  value: '7'
}, {
  label: '员工旅游',
  value: '8'
}, {
  label: '带薪年假',
  value: '9'
}, {
  label: '加班补助',
  value: '10'
}, {
  label: '企业年金',
  value: '11'
}, {
  label: '年终奖',
  value: '12'
}, {
  label: '定期体检',
  value: '13'
}, {
  label: '全勤奖',
  value: '14'
},{
  label: '学历津贴',
  value: '15'
},{
  label: '底薪加提成',
  value: '16'
},{
  label: '保底工资',
  value: '17'
},{
  label: '补充医疗保险',
  value: '18'
},{
  label: '股票期权',
  value: '19'
}]
const industryOptions = [{
  label: '暂无',
  value: '0'
}, {
  label: '互联网',
  value: '1'
}, {
  label: '企业服务',
  value: '2'
}, {
  label: '通信/网络设备',
  value: '3'
}, {
  label: '计算机软件',
  value: '4'
}, {
  label: '电子商务',
  value: '5'
}, {
  label: '环保',
  value: '6'
},{
  label: '学术/科研',
  value: '7'
},{
  label: '新零售',
  value: '8'
},{
  label: '大数据',
  value: '9'
},{
  label: '其他行业',
  value: '10'
}]
export default {
  categoryOptions,
  overTimeOptions,
  scaleList,
  financingOptions,
  welfareOptions,
  industryOptions,
  isOrYesOptions
}