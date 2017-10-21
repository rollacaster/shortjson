const _ = require('ramda')

const shorten = require('./shorten')

const print = _.pipe(shorten, a => process.stdout.write(a + '\n'))

module.exports = print
