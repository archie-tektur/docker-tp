'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/match/:dom/:ext', function (req, res) {
  var dom=req.params.dom;
  var ext=req.params.ext;
  var a=Math.floor((Math.random() * 4) );
  var b=Math.floor((Math.random() * 4) );
  var score= ''+dom+' '+a+'-'+b+' '+ext;
  res.send(score);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
