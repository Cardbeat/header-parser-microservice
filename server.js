const Express = require('express');
const app = Express();
const PORT = process.env.PORT || 3000;
const getHeader = require('./headers.js');



app.get('/api/whoami',(req, res) => {
  res.send(getHeader(req));
});

app.listen(PORT, () => {
  console.log('Server running at ' + PORT);
});
