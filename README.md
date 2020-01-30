# random-email

> Return a random email address.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-email/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-email/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-email)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-email/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-email)


## Install

```
$ npm install --save random-email
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-email/blob/master/test/spec/index.js)

```js
var randomEmail = require('random-email');

// API
// - randomEmail([options]);

// options
// - domain
```

Return a random email with a random domain.

```js
randomEmail();
// => 'kawip@piklojzob.gov'
```

Optionally specify a domain and the email will be random but the domain will not.

```js
randomEmail({ domain: 'example.com' });
// => 'giigjom@example.com'
```

Optionally specify the character length of the email both the email and domain will be random.
```js
randomEmail({length: 9});
// => bolushuko@caco.taipei
```

## Related

- [random-tld](https://github.com/mock-end/random-tld) - Return a random tld(Top Level Domain).
- [random-domains](https://github.com/mock-end/random-domains) - Return a random domain.
- [random-protocol](https://github.com/mock-end/random-protocol) - Return a random protocol.
- [random-hashtag](https://github.com/mock-end/random-tld) - Return a random hashtag.
- [random-uri](https://github.com/mock-end/random-uri.git) - Return a random url.
- [random-ipv4](https://github.com/mock-end/random-ipv4) - Return a random ipv4 address.
- [random-ipv6](https://github.com/mock-end/random-ipv6) - Return a random ipv6 address.
- [random-avatar](https://github.com/mock-end/random-avatar) - Return a URL to a random avatar from Gravatar.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-email/issues/new).
