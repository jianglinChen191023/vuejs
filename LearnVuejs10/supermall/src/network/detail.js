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
        ]
      }
    }
  }
}
