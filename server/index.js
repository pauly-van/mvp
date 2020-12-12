const express = require('express');
const port = 3000;
const path = require('path');
const app = express();
const axios  = require('axios');
const bodyParser = require('body-parser');
const steamData = require('../config.js');
const db = require('../database');

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/refresh', (req, res)=>{
  db.retrieveFromMongo((game)=>{
    console.log(game);
  })
});

app.post('/', (req, res)=>{
  let id = Object.keys(req.body);
  axios({
    method: 'GET',
    url: `${steamData.steamUrl}?appid=${id[0]}&count=1`,
  })
  .then((res)=>{
    db.saveToMongo(res);
  })
  .catch((err)=>{
    console.log(err)
  })
});

app.listen(port, ()=>console.log('Server is listening on port '+port));