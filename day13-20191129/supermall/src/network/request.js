import axios from 'axios'
import baseurl from '@/config/config.env'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: baseurl.URL,
    timeout: 5000,
  })
  // 2.axios的拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}
