import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router/index'
import store from './store/index'
import './assets/css/index.css'
import vClickOutside from 'click-outside-vue3'

createApp(App)
    .use(router)
    .use(store)
    
    .mount('#app')
