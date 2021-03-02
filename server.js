const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

function ensureSecure(req, res, next){
  if (req.header('X-Forwarded-Proto') == 'https') {
    return next();
  } else {
    res.redirect('https://' + req.host + req.url);
  }
};

app.all('*', ensureSecure);

app.listen(port, () => `App is live on port ${port}!`);
