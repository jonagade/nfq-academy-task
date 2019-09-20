import Vue from 'vue';
import Router from 'vue-router';
import Admin from './pages/index';
import Board from './pages/board/index';
import Specialist from './pages/specialist/index';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Admin,
        },
        {
            path: '/board',
            component: Board,
        },
        {
            path: '/specialist',
            component: Specialist,
        },
    ],
});