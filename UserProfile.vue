// ===== USER PROFILE (Vue.js) =====
// src/views/UserProfile.vue
<template>
  <div>
    <h2>User Profile</h2>
    <div>
      <label for="name">Name:</label>
      <input v-model="user.name" type="text" id="name" />
    </div>
    <div>
      <label for="avatar">Avatar:</label>
      <input v-model="user.avatar" type="url" id="avatar" />
    </div>
    <button @click="saveProfile">Save</button>

    <h3>Recent Scores</h3>
    <ul>
      <li v-for="(score, index) in recentScores" :key="index">
        {{ score.category }}: {{ score.score }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        name: '',
        avatar: '',
      },
      recentScores: [],
    };
  },
  created() {
    this.loadUserProfile();
  },
  methods: {
    async loadUserProfile() {
      const res = await axios.get('http://localhost:3000/api/user');
      this.user = res.data.user;
      this.recentScores = res.data.scores;
    },
    async saveProfile() {
      await axios.post('http://localhost:3000/api/user', this.user);
    },
  },
};
</script>
