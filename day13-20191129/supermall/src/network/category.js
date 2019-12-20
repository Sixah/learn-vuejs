import {request} from './request'
import baseurl from '@/config/config.env'

export function getCategory() {
  return request({
    baseurl: baseurl.DETAILURL,
    url: '/category'
  })
}
