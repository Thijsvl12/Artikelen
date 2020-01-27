let express = require('express')
let mongodb = require('mongodb')
let mongojs = require('mongojs')
let bodyparser = require('body-parser')


let app = express()
let db = mongojs('Artikelen', [])
let objectID = mongodb.ObjectID
let port = process.env.PORT || 3001;

app.use(bodyparser.json({ limit: '50mb' }));
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);

app.get('/', function(req, res){
    return res.json({'message' :'Api Working'})
})

app.listen(port, function() {
    console.log('Running RestHub on port ' + port);
});