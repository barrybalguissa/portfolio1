import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ProjectScript from '../components/ProjectScript.vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';
import PageErreur from '../components/pageErreur.vue';
import Experiences from '../components/Experiences.vue';
import Competences from '../components/Competences.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'ProjectScript', component: ProjectScript },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/about', name: 'About', component: About },
  { path: '/experiences', name: 'Experiences', component: Experiences },
  { path: '/competences', name: 'Competences', component: Competences },
  { path: '/:pathMatch(.*)*', name: 'PageErreur', component: PageErreur }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
