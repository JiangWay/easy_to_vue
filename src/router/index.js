import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import intro from './_intro.js'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import ( /* webpackChunkName: "about" */
                '../views/About.vue')
    }, {
        path: "/exchangeRate",
        name: "ExchangeRate",
        component: () => import ("../views/ExchangeRate.vue")
    }, {
        path: "/UBike",
        name: "UBike",

        component: () => import ("../views/UBike.vue")
    },
]

const router = new VueRouter({
    routes: Array.prototype.concat(routes, intro)
})

export default router
