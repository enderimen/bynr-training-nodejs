const express = require('express');

const router = express.Router();

router.use((req, res) => {
  res.status(404).send('Sayfa Bulunamad─▒!');
});

module.exports = router;
