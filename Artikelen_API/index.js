let express = require('express')
let mongodb = require('mongodb')
let mongojs = require('mongojs')
let bodyparser = require('body-parser')


let app = express()
let db = mongojs('Artikelen', ['artikelen', 'orders'])
let objectID = mongodb.ObjectID
let port = process.env.PORT || 3001;

app.use(bodyparser.json({ limit: '50mb' }));
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // restrict it to the required domain
    res.header(
      'Access-Control-Allow-Methods',
      'GET,PUT,POST,DELETE,OPTIONS,PATCH,UPDATE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, Content-type, Accept, X-Access-Token, X-Key, X-Requested-With, Authorization'
    );
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });
app.post('/iArtikel', function(req, res){
    let artikel = req.body.artikel
    db.artikelen.insert(artikel, function(err, docs){
        if(err)return res.json({mesage:'error', error: err})
        else return res.json({message:'Artikel Added', docs: docs})
    })
})
app.post('/sArtikel', function(req, res){
    let sType = req.body.sType
    let sQuery = sType?{sType:sType}:{}
    db.artikelen.find(sQuery, function(err, docs){
        if(err)return res.json({mesage:'error', error: err})
        else return res.json({message:'Artikels Found', docs: docs})
    })
})
app.listen(port, function() {
    console.log('Running RestHub on port ' + port);
});