// import VueCookies from 'vue-cookies'
import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.productionTip = false
// Vue.use(VueCookies)

app.mount('#app')
