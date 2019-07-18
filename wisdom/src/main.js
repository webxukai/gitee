import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'swiper/dist/css/swiper.css'
// import fastClick from 'fastclick'
// import 'babel-polyfill'
// import store from './store'
Vue.config.productionTip = false;
Vue.use(ElementUI);
// fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
new Vue({
  router,
  // store,
  components: { App },
  render: h => h(App)
}).$mount("#app")
