// 配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

const HelloWorld = () => import('@/components/HelloWorld')

const Home = () => import('@/components/Home')
const HomeNews = () => import('@/components/HomeNews')
const HomeMessage = () => import('@/components/HomeMessage')

const About = () => import('@/components/About')
const User = () => import('@/components/User')
const Profile = () => import('@/components/Profile')

// 1. 通过 Vue.use(插件), 安装插件
Vue.use(Router)

// 2. 定义路由
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: HomeNews
      },
      {
        path: 'news',
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
    name: 'About',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// this.$route 可以调用该对象
const router = new Router({
  routes, // (缩写) 相当于 routes: routes
  mode: 'history',
  linkActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
})

export default router;
