describe('test navigation', () => {
  it('check header links', () => {
    cy.visit('');

    cy.get('header > nav').contains('Timeline').click();
    cy.url().should('contain', '/timeline');

    cy.get('header > nav').contains('Bank map').click();
    cy.url().should('contain', '/banks');

    cy.get('header > nav').contains('Contact us').click();
    cy.url().should('contain', '/contacts');

    cy.get('header > nav').contains('Home').click();
    cy.url().should('contain', '/');
  });
});
