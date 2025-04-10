// ===== BACKEND (Node.js + Express + Firebase Firestore) =====
// server/questions.js
const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();

const db = admin.firestore();

router.post('/', async (req, res) => {
  const { question, option1, option2, option3, option4, answer, category } = req.body;
  try {
    await db.collection('questions').add({
      question,
      option1,
      option2,
      option3,
      option4,
      answer,
      category,
    });
    res.status(200).send({ message: 'Question added successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to add question', error });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.collection('questions').doc(id).delete();
    res.status(200).send({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to delete question', error });
  }
});

module.exports = router;
