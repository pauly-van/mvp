const mongoDB = require('mongoose');
mongoDB.connect('mongodb://localhost/steam');

let steamInfoSchema = new mongoDB.Schema({
  appId: Number,
  title: String,
  news: String,
  date: Number
});

let gameInfos = mongoDB.model('gameInfos', steamInfoSchema);

const saveToMongo = (steamInfo) => {
  let game = new gameInfos({
    appId: steamInfo.data.appnews.appid,
    title: steamInfo.data.appnews.newsitems[0].title,
    news: steamInfo.data.appnews.newsitems[0].contents,
    date: steamInfo.data.appnews.newsitems[0].date
  })
  game.save()
  .then((item)=>{
    console.log('Successfully added to DB')
  })
  .catch((err)=>{
    console.log(err);
  })
};

const retrieveFromMongo = (cb) => {
  gameInfos.find((err, game)=>{
      if(err){throw new Error};
      cb(game);
  });
};

const deleteDataFromMongo= function(item = {}, cb){
  gameInfos.remove(item, cb);
};

module.exports.saveToMongo = saveToMongo;
module.exports.retrieveFromMongo = retrieveFromMongo;
module.exports.deleteDataFromMongo = deleteDataFromMongo;