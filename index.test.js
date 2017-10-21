const fixture = require('./fixture.json')
const fixture2 = require('./fixture2.json')

const shortjson = require('./shorten')

describe('shortjson ', () => {
  it('shortify axios request', () => {
    expect(shortjson(fixture)).toMatchSnapshot()
  })

  it('shortify dom array', () => {
    expect(shortjson(fixture2)).toMatchSnapshot()
  })
})
