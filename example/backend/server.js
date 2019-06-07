// Packages
var express = require('express')
var Axios = require('axios');

// Variables
var vgoURL = "https://api-trade.opskins.com";
var vgoAPIKey = "47319062320152072c7da23f51327d";

// Variable for WAX ExpressTrade requests
var vgoAPI = Axios.create({
  baseURL: vgoURL,
  headers: {
    Authorization: 'Basic ' + Buffer.from(vgoAPIKey + ':').toString('base64'),
  },
});

// create express server
var app = express()

// used to access the body as it was JSON
app.use(express.json())

// route 1 (simple GET request)
app.get('/caseschema', async function (req, res) {
  let response = await vgoAPI.get('/ICase/GetCaseSchema/v1');
  res.send(response.data);
});


// route 2 (GET request with additional parameters)
app.get('/keycount', async function (req, res) {

  var trade_url = req.query.trade_url;

  if (!trade_url) {
    return res.send("No trade url provided");
  }

  let response = await vgoAPI.get(`/ICaseSite/GetKeyCount/v1?trade_url=${trade_url}`);
  res.send(response.data);
});


// route 3 (POST request with additional parameters)
var affiliateAddress = "YOUR ETHEREUM ADRESS";

app.post('/opencase', function (req, res) {

  if (!req.body.trade_url  || !req.body.caseId || !req.body.amount) {
    return res.send("One or more parameters are missing!");
  }

  vgoAPI.post('/ICaseSite/SendKeyRequest/v1', {
    trade_url : req.body.trade_url,
    case_id: req.body.caseId,
    amount: req.body.amount,
    affiliate_eth_address: affiliateAddress
  })
  .then(function(response) {
    res.send(response.data);
  })
  .catch(function(error) {
    res.send(error.response.data.message);
  })

});


// start server
var listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port);
});
