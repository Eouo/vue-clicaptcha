import Vue, {createApp} from 'vue'
import VueCookies from 'vue-cookies'
import App from '../App.vue'

const app = createApp(App)
app.config.globalProperties.$cookies = VueCookies
let ClicaptchaConstructor = app.mount(require('./Clicaptcha.vue').default)

let instance;

const Clicaptcha = (options) => {
    options = options || {}
    instance = new ClicaptchaConstructor({
        data: options
    })
    instance.vm = instance.$mount()
    instance.dom = instance.vm.$el
    document.body.appendChild(instance.dom)
    return instance.vm
}

export default Clicaptcha
