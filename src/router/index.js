import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ProjectScript from '../components/ProjectScript.vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';
import PageErreur from '../components/pageErreur.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'ProjectScript', component: ProjectScript },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/about', name: 'About', component: About },
  { path: '/:pathMatch(.*)*', name: 'PageErreur', component: PageErreur }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
