import Vue from 'vue'
import Router from 'vue-router'
import Knowledge from '@/components/Knowledge'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/Knowledge',
    	component: Knowledge
    }
  ]
})
