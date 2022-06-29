const express = require("express");
const app = express();

const router = express.Router();
//const path = require("path");

const path = __dirname + '/views/';
const port = 8080;
const bodyParser = require('body-parser');
const cors = require('cors');
//app.set("view engine", "pug");
//app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
   

let records = [];

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
  });
  
  router.get('/', function(req,res) {
    res.sendFile(path + 'home.html');
  });
  
  router.get('/get-covid', function (req, res) {
    const country = req.query.country;

    // Output the book to the console for debugging
    res.sendFile(path + 'covidInfo.html');
    
  });

  router.get('/countryrecords', function(req,res){
    const country = req.query.country;
    console.log(country);
    res.redirect('/records/'+country);

  });
  
  router.get('/records/:country',function(req,res){
    res.sendFile(path + 'countrywisecount.html');
  });
     
 

app.use(express.static(path));
app.use('/', router);
app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})