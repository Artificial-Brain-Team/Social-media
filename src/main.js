import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import Button from "primevue/button";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Textarea from 'primevue/textarea';

const app = createApp(App);
app.component('pv-button', Button);
app.component('pv-card', Card)
app.component('pv-input-text', InputText);
app.component('pv-text-area', Textarea)
app.use(router)
app.use(PrimeVue);

app.mount('#app')
