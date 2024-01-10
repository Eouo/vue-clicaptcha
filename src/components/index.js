import VueClicaptcha from './Clicaptcha'
import _Vue, {createApp} from 'vue'
import App from '../App.vue'

const app = createApp(App)
app.config.globalProperties.productionTip = false

VueClicaptcha.install = Vue => {
    if (!Vue) {
        window.Vue = Vue = _Vue
    }
    Vue.component(VueClicaptcha.name, VueClicaptcha)
}
export default VueClicaptcha;
