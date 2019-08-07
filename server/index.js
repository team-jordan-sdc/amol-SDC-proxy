require('newrelic');
const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const port = 8080;

app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  next();
});

app.use('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static('./public'));

app.use('/api/movies', proxy(process.env.CASTCREW_ADDR, { proxyReqPathResolver: (req) => `/api/movies${req.url}`}));
app.use('/api/personnel', proxy(process.env.CASTCREW_ADDR, { proxyReqPathResolver: (req) => `/api/personnel${req.url}`}));

app.use('/api/reviews', proxy(process.env.REVIEWS_ADDR, { proxyReqPathResolver: (req) => `/api/reviews${req.url}`}));
app.use('/api/products', proxy(process.env.REVIEWS_ADDR, { proxyReqPathResolver: (req) => `/api/products${req.url}`}));

app.use('/api/featured_movie', proxy(process.env.FEATURED_ADDR, { proxyReqPathResolver: (req) => req.url}));
app.use('/api/featured', proxy(process.env.FEATURED_ADDR, { proxyReqPathResolver: (req) => `/api/featured${req.url}`}));
app.use('/api/rand', proxy(process.env.FEATURED_ADDR, { proxyReqPathResolver: (req) => `/api/rand${req.url}`}));

app.listen(port, () => console.log(`Listening on port ${port}`));