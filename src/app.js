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const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello CI/CD !');
});
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Serveur sur le port 3000'));
}

module.exports = app;
