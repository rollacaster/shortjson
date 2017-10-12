const fixture = require('./fixture.json')
const fixture2 = require('./fixture2.json')

const shortjson = require('.')

describe('shortjson ', () => {
  it('shortify axios request', () => {
    expect(shortjson(fixture)).toEqual(
      `{
  "status": 200,
  "statusText": "OK",
  "headers": {
    "server": "openresty",
    "date": "Tue, 10 Oct 2017 16:17:06 GMT",
    "content-type": "text/html; charset=utf-8",
    "content-length": "148530"
  },
  "config": {
    "transformRequest": {},
    "transformResponse": {},
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN"
  },
  "request": {
    "domain": null,
    "_events": {},
    "_eventsCount": 5,
    "output": []
  },
  "data": "<!DOCTYPE html><html xmlns:cc=\\"http://creativecommons.org/ns..."
}`
    )
  })

  it('shortify dom array', () => {
    expect(shortjson(fixture2)).toEqual(`[
  {
    "type": "tag",
    "name": "strong",
    "namespace": "http://www.w3.org/1999/xhtml",
    "attribs": {
      "class": "markup--strong markup--p-strong"
    }
  },
  null,
  null,
  null
]`)
  })
})
