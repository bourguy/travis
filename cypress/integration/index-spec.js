describe('The Home Page', function() {

  beforeEach(function () {
    cy.visit(''); // base URL defined in cypress.json
  });      

  it('successfully loads', function() {
    //cy.get('.container').should('have.value', 'Heroku');
    cy.contains('Heroku');
  });

})