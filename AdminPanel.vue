// ===== ADMIN PANEL (Vue.js) =====
// src/views/AdminPanel.vue
<template>
  <div>
    <h2>Admin Panel - Manage Questions</h2>
    <form @submit.prevent="addQuestion">
      <input v-model="newQuestion.question" placeholder="Enter question" required />
      <input v-model="newQuestion.option1" placeholder="Option 1" required />
      <input v-model="newQuestion.option2" placeholder="Option 2" required />
      <input v-model="newQuestion.option3" placeholder="Option 3" required />
      <input v-model="newQuestion.option4" placeholder="Option 4" required />
      <input v-model="newQuestion.answer" placeholder="Correct answer" required />
      <button type="submit">Add Question</button>
    </form>

    <ul>
      <li v-for="(question, index) in questions" :key="index">
        {{ question.question }}
        <button @click="deleteQuestion(question.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newQuestion: {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: '',
        category: 'Math',  // This can be dynamic or selected from a dropdown
      },
      questions: [],
    };
  },
  created() {
    this.fetchQuestions();
  },
  methods: {
    async fetchQuestions() {
      const res = await axios.get('http://localhost:3000/api/questions');
      this.questions = res.data;
    },
    async addQuestion() {
      await axios.post('http://localhost:3000/api/questions', this.newQuestion);
      this.fetchQuestions();
    },
    async deleteQuestion(id) {
      await axios.delete(`http://localhost:3000/api/questions/${id}`);
      this.fetchQuestions();
    },
  },
};
</script>
