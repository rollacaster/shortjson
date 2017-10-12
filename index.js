const _ = require('ramda')

const shortenString = [
  _.is(String),
  _.pipe(
    _.ifElse(
      _.pipe(_.length, _.gte(60)),
      _.identity,
      _.pipe(_.slice(0, 60), _.flip(_.concat)('...'))
    )
  )
]
const shorten = _.pipe(
  _.cond([
    [_.is(Object), o => _.pipe(_.pick(_.pipe(Object.keys, _.take(4))(o)))(o)],
    shortenString,
    [_.is(Array), _.slice(0, 4)],
    [_.T, _.identity]
  ])
)

const shortjson = _.pipe(
  _.cond([
    [Array.isArray, _.pipe(_.slice(0, 4), _.map(shorten))],
    [_.is(Object), _.pipe(_.map(shorten))],
    shortenString,
    [_.T, _.identity]
  ]),
  o => JSON.stringify(o, null, 2)
)

module.exports = shortjson
