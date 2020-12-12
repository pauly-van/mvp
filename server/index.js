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
  let gameIDs = [];
  db.retrieveFromMongo((game)=>{
    game.forEach(g=>{
      gameIDs.push(g.appId);
    })
    for(let i = 0; i<gameIDs.length;i++){
      axios({
        method: 'GET',
        url: `${steamData.steamUrl}?appid=${gameIDs[i]}&count=1`
      })
      .then((res)=>{
        //delete database
        db.saveToMongo(res);
      })
      .catch((err)=>{
        if(err){console.log(err)};
      })
    }
    db.retrieveFromMongo((newGame)=>{
      res.status(200).send(newGame);
    })
  })
});

app.get('/gameList', (req, res)=>{
  axios({
    method: 'GET',
    url: 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/'
  })
  .then((data)=>{
    res.send(data.data.applist.apps);
  })
})

app.post('/', (req, res)=>{
  let id = Object.keys(req.body);
  axios({
    method: 'GET',
    url: `${steamData.steamUrl}?appid=${id[0]}&count=1`
  })
  .then((res)=>{
    db.saveToMongo(res);
  })
  .catch((err)=>{
    console.log(err)
  })
  res.status(200).end();
});

app.listen(port, ()=>console.log('Server is listening on port '+port));