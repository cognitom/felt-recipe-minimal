# felt-recipe-minimal

This is a minimal recipe for [Felt](https://github.com/cognitom/felt).

```bash
$ npm install felt-recipe-minimal
```

## Usage via Express

At least you have to overwrite `src`.

```javascript
'use strict'
const
  express = require('express'),
  felt = require('felt'),
  recipe = require('felt-recipe-minimal')

const
  app = express(),
  overwrite = { src: 'public', watch: true, debug: true }

app.use(felt(recipe, overwrite))
app.use(express.static('words'))
app.listen(3000)
```

## Usage via CLI

Felt CLI will come soon. (but not yet)

```bash
$ felt --recipe felt-recipe-minimal --src public --watch --debug
```
