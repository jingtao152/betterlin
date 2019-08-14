 import JlWaterfall from './views/jl-waterfall/jl-waterfall'
 import JlSwiper from './views/jl-swiper/jl-swiper'
 import JlScroll from './views/js-scroll/jl-scroll'

 export default {
   install(Vue, options) {
     // 注册全局组件
     // https://cn.vuejs.org/v2/guide/components-registration.html
     Vue.component("JlWaterfall", JlWaterfall)
     Vue.component("JlSwiper", JlSwiper)
     Vue.component("JlScroll", JlScroll)
   }
 }
