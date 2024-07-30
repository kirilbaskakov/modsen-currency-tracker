describe('test exchange', () => {
  it('passes', () => {
    cy.visit('');

    cy.contains('Commercial Dollar').click();
    cy.get('*[data-testid=exchange-modal]').should('be.visible');
    cy.get('input').first().type(15);
    cy.get('input').second().should('have.value', 15);
  });
});
