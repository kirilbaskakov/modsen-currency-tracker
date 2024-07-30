describe('test timeline', () => {
  it('passes', () => {
    cy.visit('/timeline');

    cy.contains('Select data').click();
  });
});
