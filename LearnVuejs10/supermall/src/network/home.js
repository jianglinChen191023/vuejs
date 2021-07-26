import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/get'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/get',
    params: {
      type,
      page
    }
  })
}
