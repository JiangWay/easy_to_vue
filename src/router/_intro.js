export default[
    {
        path: "/IntroWeek1",
        name: "IntroWeek1",
        component: () => import ("../views/IntroWeek1.vue")
    }, {
        path: "/IntroWeek2",
        name: "IntroWeek2",
        component: () => import ("../views/IntroWeek2.vue"),
        beforeEnter: (to, from, next) => {
            console.log('beforeEnter IntroWeek2 ')
            console.log(to)
            console.log(from)
            next()
        }
    }, {
        path: "/IntroWeek2/routerExample",
        name: "RouterExample",
        component: () => import ("../views/week2/RouterExample.vue")
    }, {
        path: "/IntroWeek3",
        name: "IntroWeek3",
        component: () => import ("../views/IntroWeek3.vue")
    }
]
