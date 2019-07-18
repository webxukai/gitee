import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import Mine from '@/pages/mine/Mine'

Vue.use(Router);

const routes = [
    {
        path:"/",
        name:'Login',
        component: Login
    },
    {
        path:"/home",
        name:'Home',
        component: Home
    },
    {
        path: "/mine",
        name: "Mine",
        component: Mine
    }
]

var router =  new Router({
    routes
})
export default router;
