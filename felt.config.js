'use strict'

/**
 * Minimal recipe for Felt
 */

const
  rollup = require('felt-rollup'),
  buble = require('rollup-plugin-buble'),
  resolve = require('rollup-plugin-node-resolve'),
  commonjs = require('rollup-plugin-commonjs'),
  postcss = require('felt-postcss'),
  postcssImport = require('postcss-import'),
  autoprefixer = require('autoprefixer')

module.exports = {
  // default handlers for each extension
  handlers: {
    '.js': rollup({
      plugins: [
        resolve({ jsnext: true,  main: true, browser: true }),
        commonjs(),
        buble()
      ],
      sourceMap: true
    }),
    '.css': postcss({
      plugins: [
        postcssImport(),
        autoprefixer()
      ],
      options: {
        map: { inline: false }
      }
    })
  }
}
