import { state } from '@/State';
import { createRouter, createWebHistory } from 'vue-router';
import { EVENTS } from '@utils/constants';
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
			component: () => import('../views/GameView.vue'),
			children: [
				{
					path: 'scoreboard',
					name: 'scoreboard',
					component: () => import('../views/game/ScoreboardView.vue'),
					children: [
						{
							path: ':team',
							name: 'team',
							component: () => import('../views/game/scoreboard/TeamScoresView.vue'),
						},
					],
				},
				{
					path: 'medals',
					name: 'medals',
					component: () => import('../views/game/MedalsView.vue'),
					children: [
						{
							path: ':id',
							name: 'medal',
							component: () => import('../views/game/medals/MedalView.vue'),
						},
					],
				},
			],
		},
	],
});

router.afterEach((to, _from) => {
	state.emit(EVENTS.ROUTE_CHANGE, to.name);
});

export default router;
