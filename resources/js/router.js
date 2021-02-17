import Vue from 'vue'
import Router from 'vue-router';


/* Landing Page */

import Welcome from '../js/components/views/Welcome.vue'


Vue.use(Router);


const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    }
]











export default routes;
