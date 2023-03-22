import { state } from '@/State.js';
import { createRouter, createWebHistory } from 'vue-router';
import { EVENTS } from '@utils/constants.js';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/game',
			name: 'game',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/GameView.vue'),
		},
	],
});

router.afterEach((to, _from) => {
	state.emit(EVENTS.ROUTE_CHANGE, to.name);
});

export default router;
