import axios from 'axios'

export function request(config,success,failure) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 发送真正的网络请求
  instance(config).then(res => {
    success(res)
  }).catch(err => {
    failure(err)
  })
}

/*export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 发送真正的网络请求
  instance(config.baseConfig).then(res => {
    config.success(res)
  }).catch(err => {
    config.failure(err)
  })
}*/

/*export function request(config) {
  return new Promise((resolve,reject) => {
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 发送真正的网络请求
    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}*/

export function request1(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // axios的拦截器
  instance.interceptors.request.use(config => {
    // 请求拦截的作用
    // 1.比如config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    // 3.某些网络请求(比如登陆(需要token))，必须携带一些特殊的信息
    console.log(config);
    return config
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    // 响应拦截
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  // 发送真正的网络请求
  return instance(config)
}

