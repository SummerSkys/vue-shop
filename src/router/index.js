import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/login.vue"


Vue.use(VueRouter)

export default new VueRouter({

    routes: [{
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
})