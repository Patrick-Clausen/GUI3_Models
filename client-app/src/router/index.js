import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import accounts from '../views/Accounts.vue'
import jobs from '../views/Jobs.vue'
import addexpense from '../views/JobOptions/AddExpense.vue'
import createjob from '../views/JobOptions/CreateJob.vue'
import joblist from '../views/JobOptions/JobList.vue'
import employment from '../views/JobOptions/ModelEmployment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/accounts',
        name: 'accounts',
        component: accounts
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: jobs
    },
    {
    path: '/addexpense',
        name: 'AddExpense',
        component: addexpense
    },
    {
        path: '/createjob',
        name: 'CreateJob',
        component: createjob
    },
    {
        path: '/joblist',
        name: 'JobList',
        component: joblist
    },
    {
        path: '/modelemployment',
        name: 'ModelEmployment',
        component: employment
    },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
