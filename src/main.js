import { createApp } from 'vue'
import App from './App.vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import store from './store'

const app = createApp(App);

new WaveUI(app, {
    
})

app.use(store).mount('#app')
