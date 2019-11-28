export default {
  // 这里的context指的是store对象
  aUpdateInfo(context,payload) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        resolve('Sixah')
      },1000)
    })
  }
}
