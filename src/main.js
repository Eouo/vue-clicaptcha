// import VueCookies from 'vue-cookies'
import {createApp} from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
const app = createApp(App)
app.config.globalProperties.productionTip = false
app.config.globalProperties.$cookies = VueCookies
// Vue.use(VueCookies)

app.mount('#app')
