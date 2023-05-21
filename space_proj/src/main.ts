import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Button from 'primevue/button'
import ToggleButton from 'primevue/togglebutton';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';

import './scss/style.scss'
import './scss/variables.scss'
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css'
import "primevue/resources/themes/lara-light-indigo/theme.css";  

const app = createApp(App)
app.component('Button', Button);
app.component('ToggleButton', ToggleButton)
app.component('Textarea',Textarea)
app.component('Dropdown', Dropdown)
app.component('InputText', InputText)
app.use(PrimeVue, {
  ripple: true,
})
app.mount('#app')
