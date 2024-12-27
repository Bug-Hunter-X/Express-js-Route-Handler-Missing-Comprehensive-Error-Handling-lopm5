const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId.  Check if it's a number and exists.
  if (isNaN(userId) || parseInt(userId) < 0) {
    return res.status(400).json({ error: 'Invalid user ID.  Must be a positive number.' });
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  } else {
    res.json(user);
  }
});