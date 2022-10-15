import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'), // 동적 import
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
  },
  {
    path: '/digimons',
    name: 'Digimons',
    component: () => import('@/views/Digimons'),
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});