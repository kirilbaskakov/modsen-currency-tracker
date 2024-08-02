describe('test exchange', () => {
  it('passes', () => {
    cy.visit('');

    cy.contains('Commercial Dollar').click();
    cy.get('*[data-testid=exchange-modal]').should('be.visible');
    cy.get('input[data-testid=exchange-input]').clear().type(15);
    cy.get('input[data-testid=exchange-result]').should('have.value', 15);
  });
});
