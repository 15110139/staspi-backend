[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [Node.js](http://nodejs.org).

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(5001)
```


  Install dependencies:

```console
$ npm install
```

  Start the server:

```console
$ npm start dev
```
  View the website at: http://localhost:5001.

  Test server with call api ping: http://localhost:5001/api/ping

  You view see the results on browser
  {"message":"Ping Success"}