import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// 引入home组件
import Home from '@/components/Home'
import SideNav from '@/components/SideNav'
import Knowledge from '@/components/Knowledge'
Vue.use(Router)

const router = new Router({
	routes: [{
			path: '/',
			redirect: '/Login'
		},
		{
			path: '/Login',
			component: Login
		},
		{
			path: '/Home',
			component: Home,
			// 配置子组件
			children: [{
				path: '/Knowledge',
				component: Knowledge
			}]
		},
		{
			path: '/SideNav',
			component: SideNav
		}
	]
})

// 导航守卫 to从哪来，from往哪去，next()放行，next(/Login)去Login组件
router.beforeEach((to, from, next) => {
	// 先判断是否是直接去登录，如果去直接放行
	if(to.path === '/Login') {
		next()
		return
	}
	// 如果不是直接去登录，先判断是否有token，有就放行，没有就先登录
	let loginToken = localStorage.getItem('loginToken')
	if(loginToken) {
		next()
	} else {
		next('/Login')
	}

})
export default router