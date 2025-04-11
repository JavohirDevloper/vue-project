import {createRouter, createWebHistory} from 'vue-router'
import {Home, LoginPage, RegisterPage} from "../pages"

const routes = [
    {
        path: '/',
        component: Home,
        name: "Home"
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'Login',
    },
    {
        path: '/register',
        component: RegisterPage,
        name: 'Register',
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router