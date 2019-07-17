const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const port = 8080;


app.use(express.static('./public'));

app.use('/api/movies', proxy('localhost:3000', { proxyReqPathResolver: (req) => `/api/movies${req.url}`}));
app.use('/api/personnel', proxy('localhost:3000', { proxyReqPathResolver: (req) => `/api/personnel${req.url}`}));

app.use('/api/reviews', proxy('localhost:3001', { proxyReqPathResolver: (req) => `/api/reviews${req.url}`}));
app.use('/api/products', proxy('localhost:3001', { proxyReqPathResolver: (req) => `/api/products${req.url}`}));

app.use('/api/featured_movie', proxy('localhost:3002', { proxyReqPathResolver: (req) => req.url}));
app.use('/api/rand', proxy('localhost:3002', { proxyReqPathResolver: (req) => `/api/rand${req.url}`}));

app.listen(port, () => console.log(`Listening on port ${port}`));