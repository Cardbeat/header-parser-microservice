const Express = require('express');
const bodyParser = require('body-parser');
const app = Express();
const PORT = process.env.PORT || 3000;
const getHeader = require('./headers.js');

//routes


//midleware
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api/whoami',(req, res) => {
  res.json(getHeader(req));
});

app.listen(PORT, () => {
  console.log('Server running at ' + PORT);
});
