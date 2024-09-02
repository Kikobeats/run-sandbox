'use strict'

const test = require('ava')

const { detectDependencies } = require('../src/compile')

test('detect requires', t => {
  const code = `
    const isEmoji = require('is-standard-emoji@1.0.0');
    const isNumber = require('is-number');
    const isString = require('is-string');
  `
  t.deepEqual(detectDependencies(code), [
    'is-standard-emoji@1.0.0',
    'is-number@latest',
    'is-string@latest'
  ])
})

test('detect imports', t => {
  const code = `
    import isEmoji from 'is-standard-emoji@1.0.0';
    import isNumber from 'is-number';
    import isString from 'is-string';
  `

  t.deepEqual(detectDependencies(code), [
    'is-standard-emoji@1.0.0',
    'is-number@latest',
    'is-string@latest'
  ])
})
