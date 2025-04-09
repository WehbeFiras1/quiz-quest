<template>
  <div class="app">
    <h1>Quiz Quest</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.app {
  text-align: center;
  font-family: Arial, sans-serif;
}
</style>

// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';
import Leaderboard from '../views/Leaderboard.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/quiz/:category', component: Quiz },
  { path: '/leaderboard', component: Leaderboard },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
