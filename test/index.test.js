describe('Diagnostics Pagelet', function () {
  'use strict';

  var Pagelet = require('pagelet')
    , Diagnostics = require('../')
    , assume = require('assume')
    , pagelet, P;

  beforeEach(function () {
    P = Diagnostics.extend({
      view: 'fixtures/view.html'
    });

    pagelet = new P(new Pagelet);
  });

  afterEach(function each() {
    pagelet = null;
  });

  it('has css reference', function () {
    assume(pagelet.css).to.be.an('array');
    assume(pagelet.css[0]).to.include('diagnostic.styl');
    assume(pagelet.css[0]).to.equal(process.cwd() + '/diagnostic.styl');
    assume(pagelet.css[0]).to.not.equal('diagnostic.styl');
  });
});
