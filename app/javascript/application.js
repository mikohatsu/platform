import { createApp } from 'vue'
import App from './src/App.vue'
import router from './src/router'
import './src/assets/styles/main.scss'

// 디버깅을 위한 콘솔 로그
console.log('Vue:', createApp)
console.log('App component:', App)
console.log('Router:', router)

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
})