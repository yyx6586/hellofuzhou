import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'
import Index from '../components/Index'
import Register from '../components/Register'
import News from '../components/News'
import NewsDetails from '../components/NewsDetails'
import PersonalAdmin from '../components/PersonalAdmin'
import PersonalUser from '../components/PersonalUser'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/index',
      name: 'Index',
      component: Index
    },

    {
      path: '/register',
      name: 'Register',
      component: Register
    },

    {
      path: '/news',
      name: 'News',
      component: News
    },

    {
      path:'/newsDetails',
      name:'NewsDetails',
      component:NewsDetails
    },

    {
      path:'/personalAdmin',
      name:'PersonalAdmin',
      component:PersonalAdmin
    },

    {
      path:'/personalUser',
      name:'PersonalUser',
      component:PersonalUser
    }
  ]
})
