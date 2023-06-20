import { state } from '@/State';
import { store } from '@/Store';
import { createRouter, createWebHistory } from 'vue-router';
import { DEBUG } from '@utils/config';
import { EVENTS, STORE_KEYS } from '@utils/constants';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/game',
			name: 'game',
			beforeEnter: (from, to, next) => {
				if (!DEBUG && !store.get(STORE_KEYS.USER_ISO)) next('/');
				else next();
			},
			component: () => import('../views/GameView.vue'),
			children: [
				{
					path: 'scoreboard',
					name: 'scoreboard',
					component: () => import('../views/game/ScoreboardView.vue'),
				},
				{
					path: 'scoreboard/:team',
					name: 'team',
					component: () => import('../views/game/scoreboard/TeamScoresView.vue'),
				},
				{
					path: 'medals/:iso/:id?',
					name: 'medals',
					component: () => import('../views/game/MedalsView.vue'),
				},
			],
		},
	],
});

router.afterEach((to, _from) => {
	state.emit(EVENTS.ROUTE_CHANGE, to.name);
});

export default router;
