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
