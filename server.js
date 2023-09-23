const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})

app.get('/bundle', (req,res) => {
  console.log('headers',req.headers);
  const htmlContent = `
      <h1> new content</h1>
    `;
    res.send(htmlContent);
})

app.listen(process.env.PORT || 8080, () => console.log('server is up'));
