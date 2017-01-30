const express = require('express');
const app = express();
const path = require('path');

// viewed at http://localhost:3000
app.use(express.static(__dirname + '/public'))


app.listen(3000, function () {
  console.log('app listening on port 3000!')
})