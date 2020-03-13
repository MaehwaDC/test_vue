// 0. Если используем модульную систему (например через vue-cli),
// импортируем Vue и VueRouter и затем вызываем `Vue.use(VueRouter)`.
import Vue from 'vue';
import VueRouter from 'vue-router';

import BoardsListPage from './BoardsListPage';
import BoardPage from './BoardPage';

Vue.use(VueRouter);

export const routes = [
  { path: '', name: 'home', component: BoardsListPage },
  { path: '/board/:id', name: 'board', component: BoardPage },
];

export default new VueRouter({
  routes,
});
