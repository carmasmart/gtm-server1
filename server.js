const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('GTM Server Container is running');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
