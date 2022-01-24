import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// how it was originally 
// createApp(App).mount('#app')

createApp(App)
  .use(router)
  .mount('#app')