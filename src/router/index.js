import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from "@/views/IndexView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ProfileView from "@/views/ProfileView.vue";
import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: IndexView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            beforeEnter: (to, from, next) => {
                guest(next);
            }
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView,
            beforeEnter: (to, from, next) => {
                auth(next);
            }

        }
    ]
})

export default router
