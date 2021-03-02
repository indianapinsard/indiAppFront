const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.all('*', ensureSecure);

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => `App is live on port ${port}!`);

function ensureSecure(req, res, next) {
  if (req.header('X-Forwarded-Proto') === 'https') {
    next();
  } else {
    res.redirect(`https://${req.hostname}${req.url}`);
  }
}
