import Vue from 'vue'
import Router from 'vue-router'
import Knowledge from '@/components/Knowledge'
import Login from '@/components/Login'
// 引入home组件
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
  routes: [
  {
    	path: '/',
    	redirect: '/Login'
   },
    {
    	path: '/Knowledge',
    	component: Knowledge
    },
    {
    	path: '/Login',
    	component: Login
    },
    {
    	path: '/Home',
    	component: Home
    }
    
  ]
})
