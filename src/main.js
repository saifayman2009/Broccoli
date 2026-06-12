import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import router from './router'
import 'primeicons/primeicons.css'
import '@/assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)

app.mount('#app') 