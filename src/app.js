const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('pink CI/CD !');
});
app.get('/bonjour', (req, res) => {
  res.send('Bonjour tout le monde');
});
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Serveur sur le port 3000'));
}

module.exports = app;
