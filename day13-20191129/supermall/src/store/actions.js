import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context,payload) {
    // 数组常用的方法有哪些？
    // push/pop/unshift/sort/reverse/map/filter/reduce/join

    /*      let oldProduct = null
          for (let item of state.cartList) {
            if (item.id === payload.id) {
              oldProduct = item
            }
          }*/

    let oldProduct = context.state.cartList.find(item => item.id === payload.id)

    if (oldProduct) {
      // oldProduct.count += 1
      context.commit(ADD_COUNTER,oldProduct)
    } else {
      payload.count = 1
      // state.cartList.push(payload)
      context.commit(ADD_TO_CART,payload)
    }
  }
}
