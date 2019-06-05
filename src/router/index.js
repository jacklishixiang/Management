import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Anterbox from '@/components/Anterbox'
import Title from '@/html/title'
import Image from '@/html/image'
import Login from '@/getinto/login'
import Register from '@/getinto/register'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/login',
	      	name: 'Login',
	      	component:Login
		},
		{
			path: '/register',
	      	name: 'Register',
	      	component:Register
		},
	    {
	    	path: '/',
	      	name: 'HelloWorld',
	      	component:HelloWorld
	    },
	    {
	    	path: '/anter',
	    	name: 'Anterbox',
	    	component: Anterbox,
	    	children:[
	    		{
	    			path:'title',
	    			name:'title',
	    			component:Title
	    		}
	    	]
	    },
	    {
	    	path:'/image',
	    	name:'image',
	    	component:Image
	    }
	]
})