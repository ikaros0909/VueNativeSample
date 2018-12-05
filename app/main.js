import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import Vuex from 'vuex'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools, { host: '10.1.0.57' })
}else{
  Vue.use(Vuex, { host: '10.1.0.57' })
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)

new Vue({
  render: h => h('frame', [h(App)])
}).$start()
