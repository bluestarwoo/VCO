import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import layout from '@/view/index.vue'
import login from '@/view/login'
import index from '@/view/index/index.vue'
import vworld from '@/view/vworld'

const routes = [
    {
        path:'/',
        name:'layout',
        component:layout,
        // redirect: {
        //     name: 'login'
        // },
        children:[
            {
                path:'index',
                name:'index',
                component:index
            },
            {
                path:'login',
                name:'login',
                component:login
            },
            {
                path:'vueWorld',
                name:'vworld',
                component:vworld,
            },
        ]
    }
]

const router = new VueRouter({
    routes
});

export default router


