describe('test timeline', () => {
  it('success', () => {
    cy.visit('/timeline');

    cy.contains('Select data').click();
    cy.contains('Select data').get('input[type=number]').dblclick().type(30);
    cy.contains('Randomize').click();
    cy.contains('Save').click();
    cy.contains('The chart has been successfully built!').should('be.visible');
  });

  it('error', () => {
    cy.visit('/timeline');

    cy.contains('Select data').click();
    cy.contains('Select data').get('input[type=number]').dblclick().type(5);
    cy.contains('Randomize').click();
    cy.contains('Save').click();
    cy.contains('Error').should('be.visible');
  });
});
