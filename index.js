const _ = require('ramda')

const shortjson = _.pipe(
  _.map(
    _.cond([
      [_.is(Object), o => _.pick(_.pipe(Object.keys, _.take(4))(o))(o)],
      [
        _.is(String),
        _.pipe(
          _.ifElse(
            _.pipe(_.length, _.gte(60)),
            _.identity,
            _.pipe(_.slice(0, 60), _.flip(_.concat)('...'))
          )
        )
      ],
      [_.T, _.identity]
    ])
  ),
  o => JSON.stringify(o, null, 2)
)

module.exports = shortjson
