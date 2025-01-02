import { createApp } from 'vue'
import App from './src/App.vue'
import router from './src/router'

// 일반적인 스타일 import
import './src/assets/styles/main.scss'

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
})