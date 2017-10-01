//Server hosting code
// const restify = require('restify');
const path = require('path')
// global.XMLHttpRequest = require("xhr2");

const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use(express.static('public'))

// const server = restify.createServer();

// server.listen(process.env.PORT || 3000, () => {
//     console.log(`${server.name} listening to ${server.url}`);
// });
// server.get('/', restify.plugins.serveStatic({
//     'directory': path.join(__dirname, 'public'),
//     'file': 'index.html'
// }));