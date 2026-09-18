import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Home.vue';
import About from '../About.vue';
import Contact from '../Contact.vue';
import PageErreur from '../pageErreur.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'PageErreur', component: PageErreur }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
