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

// 路由守衛（Navigation Guards）
router.beforeEach((to, from, next) => {
    console.log('router before 進入每頁都會執行 ')
    console.log(to)
    console.log(from)
    // vue2一定要寫next() 否則不會進入頁面 然後在哪邊找老半天ＸＤ
    // vue3 則可以不寫
    // https://book.vue.tw/CH4/4-4-navigation-guards.html
    next()
})

export default router
