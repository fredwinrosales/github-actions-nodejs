// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({'message':'Hello World Node.js!'});
});

app.listen(port, () => {
  console.log(`🚀 API escuchando en http://localhost:${port}`);
});
