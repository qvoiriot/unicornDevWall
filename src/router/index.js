import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '@/views/About.vue'),
	},
	{
		path: '/admin',
		name: 'Admin',
		meta: { needAuth: true },
		component: () =>
			import(/* webpackChunkName: "admin" */ '@/views/admin/Admin.vue'),
		children: [
			{
				path: 'management',
				name: 'AdminManagement',
				component: () =>
					import(
						/* webpackChunkName: "admin" */ '@/views/admin/AdminManagement.vue'
					),
			},
			{
				path: 'validation',
				name: 'AdminValidation',
				component: () =>
					import(
						/* webpackChunkName: "admin" */ '@/views/admin/AdminValidation.vue'
					),
			},
		],
	},
	{
		path: '/ressource/:id',
		name: 'Ressource',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '@/views/Ressource.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	const isAuth = store.state.auth.credentials.accessToken;
	const isRouteProtected = to.matched.some((route) => route.meta.needAuth);

	if (isRouteProtected && !isAuth) {
		next({ name: 'Login' });
	} else {
		next();
	}
});

export default router;
