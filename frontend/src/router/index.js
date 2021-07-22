import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
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
    if (routeIsAuthOnly(to)) {
        if (! isLoggedIn()) {
            return next({
                name: 'login',
                query: { redirect: to.fullPath },
            })
        }

        return next()
    }

    if (routeIsGuestOnly(to)) {
        if (isLoggedIn()) {
            return next({
                path: 'board',
                query: { redirect: to.fullPath }
            })
        }

        return next()
    }

    return next()
})


function routeIsAuthOnly(route) {
    return route.matched.some((route) => route.meta.authOnly)
}


function routeIsGuestOnly(route) {
    return route.matched.some((route) => route.meta.guestOnly)
}

export default router