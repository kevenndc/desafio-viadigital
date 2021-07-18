import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Login.vue'
import Board from '../views/Board.vue'
import Welcome from '../views/Welcome.vue'

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { guestOnly: true },
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { guestOnly: true },
    },
    {
        path: '/board',
        name: 'board',
        component: Board,
        meta: { authOnly: true },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

function isLoggedIn() {
    return localStorage.getItem('token')
}

router.beforeEach((to, from, next) => {
    redirectIfRouteIsAuthOnly(to, next);
    redirectIfRouteIsGuestOnly(to, next);
})

function redirectIfRouteIsAuthOnly(destination, next) {
    if (routeIsAuthOnly(destination)) {
        if (! isLoggedIn()) {
            return next({
                name: 'login',
                query: { redirect: destination.fullPath },
            })
        }

        return next()
    }
}

function routeIsAuthOnly(route) {
    return route.matched.some((route) => route.meta.authOnly)
}

function redirectIfRouteIsGuestOnly(destination, next) {
    if (routeIsGuestOnly(destination)) {
        if (isLoggedIn()) {
            return next({
                path: 'board',
                query: { redirect: destination.fullPath }
            })
        }

        return next()
    }
}

function routeIsGuestOnly(route) {
    return route.matched.some((route) => route.meta.guestOnly)
}

export default router