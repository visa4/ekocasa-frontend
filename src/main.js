import { createApp } from 'vue'
import Landing from './template/Landing.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
//import VueGoogleMaps from '@fawmi/vue-google-maps'

import '@/assets/main.css'
import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';          

const app = createApp(Landing);

app.use(PrimeVue);
/*
app.use(VueGoogleMaps, {
    load: {
        key: 'YOUR_API_KEY_COMES_HERE',
        // language: 'de',
    },
})
*/

app.component('Button', Button);
        
app.mount('#app');
