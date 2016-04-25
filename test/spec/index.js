var expect = require('chai').expect;


describe('random-email: ', function () {

  var randomEmail = require('../../');

  it('randomEmail()', function () {
    expect(randomEmail()).to.be.a('string');
    expect(randomEmail()).to.be.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
  });

  it('randomEmail({ domain: "random.com" })', function () {
    expect(randomEmail({ domain: 'random.com' })).to.be.match(/random\.com$/);
  });
});
