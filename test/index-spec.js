const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis'); // dummy test
    expect('champion').to.equal('champion'); // dummy test
  });
});

describe('The Home Page', function() {

  beforeEach(function () {
    cy.visit(''); // base URL defined in package.json
  });      

  it('successfully loads', function() {
    cy.get('.container').should('have.value', 'Heroku');
  });

})