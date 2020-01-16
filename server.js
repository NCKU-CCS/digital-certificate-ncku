const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const next = require('next');

dotenv.config();
const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT) || 3000;
const jwtsecret = process.env.JWT_SECRET || '';
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }));

  server.get('/', (req, res) => app.render(req, res, '/'));
  server.get('/reissue', (req, res) => app.render(req, res, '/reissue'));
  server.get('/query', (req, res) => app.render(req, res, '/query'));
  server.get('/api/token', (_, res) => {
    const token = jwt.sign(
      {
        from: 'digital-certificate-ncku',
        expired: Date.now() + 1000 * 60 * 10,
      },
      jwtsecret,
    );
    res.send(token);
  });
  server.all('*', (req, res) => handler(req, res));

  server.listen(port, err => {
    if (err) throw err;
    if ('' === jwtsecret) throw Error('Token null or undefined');
    console.info(`Start on ${port}`);
  });
});
