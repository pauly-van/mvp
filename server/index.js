const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res)=>{
  res.send(index).status(200);
});

app.post('/', (req, res)=>{
  res.send('got post request');
});

app.listen(port, ()=>console.log('Server is listening on port '+port));