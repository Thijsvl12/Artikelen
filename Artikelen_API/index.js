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

app.post('/iArtikel', function(req, res){
    let artikel = req.body.artikel
    db.artikelen.insert(artikel, function(err, docs){
        if(err)return res.json({mesage:'error', error: err})
        else return res.json({message:'Artikel Added', docs: docs})
    })
})

app.listen(port, function() {
    console.log('Running RestHub on port ' + port);
});