describe('test theming', () => {
  it('passes', () => {
    cy.visit('');

    cy.get('*[data-testid=theme-button]').click();
  });
});
