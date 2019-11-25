// 配置路由相关的信息

import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
// 路由映射关系
const routes = [
  {
    // 默认路径
    path: '/',
    redirect: '/home',
  },
  {
    // 路径
    path: '/home',
    /*
     路由懒加载的三种方式
     1.结合Vue的异步组件和webpack的代码分析
     const Home = resolve => {
       require.ensure(
        ['../components/Home.vue'],
        () => {
          resolve(require('../components/Home.vue'))
        })
     }

     2.AMD写法
     const Home = resolve => require(
       ['../components/Home.vue'],
       resolve)

     3.在ES6中，我们可以有更简单的写法来组织Vue异步组件和webpak的代码分割
     const Home = () => import('../components/Home.vue')
     */
    // 挂载组件
    component: Home,
    meta: {
      title: '首页'
    },
    // 子路径配置
    children: [
      // {
      //   // 默认路径
      //   path: '/',
      //   redirect: 'news',
      // },
      {
        // 路径
        path: 'news',
        // 挂载组件
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    meta: {
      title: '关于'
    },
    component: About
  },
  {
    // 动态路由
    path: '/user/:id',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    // 动态路由
    path: '/profile',
    // 元数据（描述数据的数据）
    meta: {
      title: '档案'
    },
    component: Profile
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置守卫(hook)
// to,from 是route类型
// to 即将要进入的目标的路由对象
// from 当前导航即将要离开的路由对象
// next 调用该方法后，才能进入下一个钩子
router.beforeEach((to,from,next) => {
  // 从from跳转到to
  // document.title = to.meta.title
  document.title = to.matched[0].meta.title
  next()
})

// 后置的钩子
router.afterEach((to,from) => {
  console.log('你的微笑');
})

// 3.将router对象传入到Vue实例
export default router
