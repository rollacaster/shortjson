const _ = require('ramda')
const util = require('util')

const shortenString = _.pipe(
  _.ifElse(
    _.pipe(_.length, _.gte(60)),
    _.identity,
    _.pipe(
      _.juxt([
        _.pipe(_.slice(0, 100)),
        _.pipe(
          _.length,
          _.flip(_.subtract)(60),
          _.toString,
          _.concat('...'),
          _.flip(_.concat)(' more characters')
        )
      ]),
      _.apply(_.concat)
    )
  )
)

const shortenObject = o => _.pipe(_.pick(_.pipe(Object.keys, _.take(4))(o)))(o)

function shortjson(json) {
  return _.pipe(
    _.cond([
      [Array.isArray, _.map(shortjson)],
      [
        _.is(Object),
        _.map(
          _.cond([
            [_.is(Object), shortenObject],
            [_.is(String), shortenString],
            [_.T, _.identity]
          ])
        )
      ],
      [_.is(String), shortenString],
      [_.T, _.identity]
    ])
  )(json)
}

module.exports = _.pipe(shortjson, a =>
  util.inspect(a, {
    depth: 2,
    maxArrayLength: 14,
    colors: true
  })
)
