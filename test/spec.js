'use strict'
const
  assert = require('assert'),
  co = require('co'),
  request = require('request-promise'),
  fsp = require('fs-promise'),
  path = require('path'),
  felt = require('felt/lib/server'),
  configBuilder = require('felt/lib/config-builder'),
  recipe = require('../felt.config.js')

describe('felt-recipe-minimal', () => {
  let server
  const port = 3333, root = __dirname

  before(co.wrap(function* () {
    const opts = configBuilder(recipe, { src: 'fixture', port, root })
    server = yield felt(opts)
  }))

  it('bundles scripts', co.wrap(function* () {
    const
      url = `http://localhost:${ port }/app.js`,
      actual = yield request(url),
      file = path.join(__dirname, 'expect', 'app.js'),
      expected = yield fsp.readFile(file, 'utf8')

    assert.equal(actual, expected.trim())
  }))

  it('transpiles styles', co.wrap(function* () {
    const
      url = `http://localhost:${ port }/style.css`,
      actual = yield request(url),
      file = path.join(__dirname, 'expect', 'style.css'),
      expected = yield fsp.readFile(file, 'utf8')

    assert.equal(actual, expected.trim())
  }))

  after(() => {
    server.close()
  })
})
