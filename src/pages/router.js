// 0. Если используем модульную систему (например через vue-cli),
// импортируем Vue и VueRouter и затем вызываем `Vue.use(VueRouter)`.
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './Home'
import Tasks from './Tasks'

Vue.use(VueRouter);

// 2. Определяем несколько маршрутов
// Каждый маршрут должен указывать на компонент.
// "Компонентом" может быть как конструктор компонента, созданный
// через `Vue.extend()`, так и просто объект с опциями компонента.
// Мы поговорим о вложенных маршрутах позднее.
export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/tasks', name: 'tasks', component: Tasks }
];

// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
// Вы можете передавать и дополнительные опции, но пока не будем усложнять.
export default new VueRouter({
  routes // сокращённая запись для `routes: routes`
})

