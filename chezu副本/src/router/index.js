import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import main from "@/components/main"
import log from '@/components/logon'
import reg from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	  path:'/main',
    	  component:main,
    	  
    },{
    	  path:'/logon',
    	  component:log
    },{
    	  path:'/register',
    	  component:reg
    }
    
  ]
})
