describe('test navigation', () => {
  it('check header links', () => {
    cy.visit('');

    cy.get('header').contains('Timeline').click();
    cy.url().should('contain', '/timeline');

    cy.get('header').contains('Bank map').click();
    cy.url().should('contain', '/banks');

    cy.get('header').contains('Contact us').click();
    cy.url().should('contain', '/contacts');

    cy.get('header').contains('Home').click();
    cy.url().should('contain', '/');
  });
});
