import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// how it was originally 
// createApp(App).mount('#app')

const app = createApp(App)

app.use(router)

router.isReady().then(() => app.mount('#app'))