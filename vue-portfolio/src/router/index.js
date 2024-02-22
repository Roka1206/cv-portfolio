import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layout/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '/', name: 'home', component: HomeView },
      { path: '/about', name: 'about', component: AboutView },
      { path: '/skills', name: 'skills', component: SkillsView },
      { path: '/projects', name: 'projects', component: ProjectsView },
      { path: '/contact', name: 'contact', component: ContactView }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
