import {request} from './request'
import baseurl from '@/config/config.env'

export function getDetail(id) {
  return request({
    baseurl: baseurl.DETAILURL,
    url: '/detail',
    params: {
      iid: id
    }
  })
}

export function getRecommend() {
  return request({
    baseurl: baseurl.DETAILURL,
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class GoodsParam {
  constructor(info,rule) {
    this.image = info.image ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}
