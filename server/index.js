const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('got page request');
});

app.post('/', (req, res)=>{
  res.send('got post request');
});

app.listen(port, ()=>console.log('Server is listening on port '+port));