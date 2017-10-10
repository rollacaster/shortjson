const fixture = require('./fixture.json')

const shortjson = require('.')

describe('shortjson ', () => {
  it('shortify axios request', () => {
    expect(shortjson(fixture)).toEqual(`
      status: 200,
      statusText: 'OK',
      headers: {
        server: 'openresty',
        date: 'Tue, 10 Oct 2017 16:17:06 GMT',
        'content-type': 'text/html; charset=utf-8',
        'content-length': '148530',
        ...
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        ...
      },
      request: {
        domain: null,
        _events: {},
        _eventsCount: 5,
        output: [],
        ...
      },
      data:
        '<!DOCTYPE html><html xmlns:cc="http://creativecommons.org/ns...'
    `)
  })
})
