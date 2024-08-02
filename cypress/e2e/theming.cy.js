describe('test theming', () => {
  it('passes', () => {
    cy.visit('');

    cy.get(' *[data-testid=theme-button]').first().click();
    cy.get('*[data-testid=light]');
    cy.get('*[data-testid=theme-button]').first().click();
    cy.get('*[data-testid=dark');
  });
});
