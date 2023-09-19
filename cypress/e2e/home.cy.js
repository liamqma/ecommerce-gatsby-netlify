describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/');
  });

  it('displays three collections', () => {
    cy.get('a').contains('Flower Frames').should('have.length', 1);
    cy.get('a').contains('Handtied Posies').should('have.length', 1);
    cy.get('a').contains('Flower ID Frames').should('have.length', 1);
  });
});
