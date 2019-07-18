import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import ForgetPassword from '@/pages/forgetPassword/ForgetPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      // children:[
      //   {
      //     path:'/personInfor',
      //     name: 'PersonInfor',
      //     component: PersonInfor
      //   },
      //   {
      //     path:'/merchantAssociation',
      //     name: 'MerchantAssociation',
      //     component: MerchantAssociation
      //   }
      // ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    }

  ]

})