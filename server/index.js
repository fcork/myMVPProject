var express = require('express');
let app = express();
var bodyParser = require('body-parser');
let axios = require('axios')
// const config = require('../config.js')
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.post('/jokes', function (req, res) {
//   axios({
//     method: 'get',
//     url: 'http://api.icndb.com/jokes/'
//   })
//   .then(function(data){

//   })
// });

app.get('/jokes', function (req, res) {
  axios({
    method: 'get',
    url: 'http://api.icndb.com/jokes/'
  })
  .then(function(data){
    // console.log('parsed data' JSON.parse(data.data))
    // console.log('this is data', data.data)
    res.send(data.data)
  })

  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
