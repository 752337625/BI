import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		redirect: '/index',
	},
	{
		path: '/index',
		name: 'index',
		component: () => import('@/views/index.vue'),
	},
];

const router = new VueRouter({
	mode: 'hash',
	base: '/drap/',
	routes,
});

export default router;
