import Components from './components';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
		path: '/',
		component: Components.Home,
		name: 'home'
	},
	{
		path: '/article/:id',
		component: Components.Article,
		name: 'article',
		props: true,
	},
	{
		path: '/article',
		component: Components.Article,
		name: 'create_article',
	},
	{
		path: '/user',
		component: Components.CurrentUser,
		name: 'current_user',
		props: true
	},
	{
		path: '/user/:id',
		component: Components.User,
		name: 'user',
		props: true
	},
	{
		path: '/*',
		redirect: {
			name: 'home'
		}
	},
]

const router = new VueRouter({
	routes
})

export default router;