import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Button from 'primevue/button'
import './scss/style.scss'
import './scss/variables.scss'
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css'
import "primevue/resources/themes/lara-light-indigo/theme.css";  

const app = createApp(App)
app.component('Button', Button);
app.use(PrimeVue, {
  ripple: true,
})
app.mount('#app')
