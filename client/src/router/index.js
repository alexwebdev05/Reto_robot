import { createRouter, createWebHistory } from 'vue-router';

// Componentes
import components from '../pages/index'
const { Home, Control, Temperaturas, Login, Registro, Xml } = components

// Rutas
const routes = [
    { path: '/', component: Home },
    { path: '/control', component: Control },
    { path: '/temperaturas', component: Temperaturas, meta: { requiresAuth: true } },
    { path: '/login', component: Login },
    { path: '/registro', component: Registro },
    { path: '/xml', component: Xml }
]

// Ruter
const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verifica si el usuario está autenticado
    const token = localStorage.getItem('token');
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      // Si hay un token, permitir el acceso a la ruta
      next();
    }
  } else {
    next(); // Asegúrate de siempre llamar a next()!
  }
});

export default router;
