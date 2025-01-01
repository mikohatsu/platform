import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Font Awesome 사용을 위한 CDN을 index.html에 추가해야 합니다
document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(App)
    app.use(router)
    app.mount('#app')
})