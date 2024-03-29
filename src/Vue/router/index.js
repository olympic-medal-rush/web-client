import { store } from '@/Store';
import { createRouter, createWebHistory } from 'vue-router';
import { DEBUG } from '@utils/config';
import { STORE_KEYS } from '@utils/constants';
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
					meta: { transition: 'gameroute' },
				},
				{
					path: 'scoreboard/:iso',
					name: 'team',
					component: () => import('../views/game/scoreboard/TeamScoresView.vue'),
					meta: { transition: 'gameroute' },
				},
				{
					path: 'medals/:iso/:id?',
					name: 'medals',
					component: () => import('../views/game/MedalsView.vue'),
					meta: { transition: 'gameroute' },
				},
			],
		},
		{ path: '/:pathMatch(.*)*', redirect: '/' },
	],
});

router.beforeResolve((to) => {
	if (to.name === 'home' && store.get(STORE_KEYS.USER_ISO)) return false;
});

export default router;
