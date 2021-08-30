import {request} from "./request";

export function getDetail(id) {
  // return request({
  //   url: 'detail',
  //   params: {
  //     id
  //   }
  // })

  return {
    result: {
      itemInfo: {
        topImages: [
          'https://img2.baidu.com/it/u=3029420981,482989275&fm=26&fmt=auto&gp=0.jpg',
          'https://img0.baidu.com/it/u=2903748893,2530972619&fm=26&fmt=auto&gp=0.jpg'
        ],
        title: '2021新版体恤',
        desc: '新款上市',
        price: '￥38.50',
        oldPrice: '￥69.00',
        discountDesc: '活动价',
        lowNowPrice: '38.50'
      },
      columns: ['销量 1580', '收藏33人', '默认快递'],
      shopInfo: {
        services: [
          {icon: '//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png', name: '退货补运费'},
          {icon: '//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png', name: '全国包邮'},
          {icon: '//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png', name: '7天无理由退货'},
          {icon: '//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png', name: '72小时发货'}
        ],
        score: [
          {isBetter: false, name: '描述相符', score: 4.64},
          {isBetter: true, name: '价格合理', score: 5},
          {isBetter: false, name: '质量满意', score: 4.62},
        ],
        cFans: 17145,
        cGoods: 99,
        cSells: 57876,
        name: '仲陌美',
        allGoods: 'http://m.meilishuo.com',
        shopLogo: '//s11.mogucdn.com/mlcdn/c45406/170714_0cg7e9a3ldij28dikejaef50ih38g_300x300.jpg'
      },
      detailInfo: {
        desc: '新款上市',
        detailImage: [
          {
            key: '穿着效果',
            list: [
              '//s11.mogucdn.com/mlcdn/c45406/180625_48lbieiji2j42ck246eb9jc2l6770_800x800.jpg',
              '//s11.mogucdn.com/mlcdn/c45406/180625_48lbieiji2j42ck246eb9jc2l6770_800x800.jpg',
              '//s11.mogucdn.com/mlcdn/c45406/180625_48lbieiji2j42ck246eb9jc2l6770_800x800.jpg',
              '//s11.mogucdn.com/mlcdn/c45406/180625_48lbieiji2j42ck246eb9jc2l6770_800x800.jpg',
              '//s11.mogucdn.com/mlcdn/c45406/180625_48lbieiji2j42ck246eb9jc2l6770_800x800.jpg',
              '//s11.mogucdn.com/mlcdn/c45406/180625_48lbieiji2j42ck246eb9jc2l6770_800x800.jpg'
            ]
          }
        ]
      },
      itemParams: {
        info: {
          anchor: "product_info",
          key: "产品参数",
          set: [
            {key: "图案", value: "宫廷复古图/名族复古图,字母/文字/数字"},
            {key: "厂名", value: "艾玫莉服饰有限公司"},
            {key: "颜色", value: "黑白拼接"},
            {key: "袖型", value: "常规袖"},
            {key: "上衣厚度", value: "适中"},
            {key: "尺码", value: "XL,L,M,XXL"},
            {key: "衣长", value: "常规款(51-65cm)"},
            {key: "版型", value: "宽松"},
            {key: "季节", value: "春秋"},
            {key: "厂址", value: "广东省揭阳市普宁市"},
            {key: "材质", value: "棉"},
            {key: "领型", value: "圆领"},
            {key: "元素", value: "面料拼接,平绣"},
            {key: "袖长", value: "长袖"},
            {key: "风格", value: "原宿"},
            {key: "潮流", value: "韩系"},
          ]
        },
        rule: {
          anchor: "size_info",
          disclaimer: "以上尺寸为实物人工测量, 因测量当时不同会有1-2cm的偏差",
          key: "尺码说明",
          tables: [
            [
              ["尺码", "M", "L", "XL", "XXL"],
              ["衣长", "61.5", "63", "64.5", "68"],
              ["胸围", "98", "104", "110", "116"],
              ["袖长", "63", "66", "68.5", "70.5"]
            ]
          ]
        }
      }
    }
  }
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images 可能没有值, (某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
