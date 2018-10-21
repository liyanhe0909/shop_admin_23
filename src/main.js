// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element UI
import ElementUI from 'element-ui'
// 引入element UI css
import 'element-ui/lib/theme-chalk/index.css'




Vue.config.productionTip = false
// 使用element UI
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //创建组件，
  components: { App },
  // 组件模板
  template: '<App />'
})
