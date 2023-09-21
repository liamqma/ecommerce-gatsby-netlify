describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/');
  });

  it('displays three collections', () => {
    cy.get('a').contains('Garden Frames').should('have.length', 1);
    cy.get('a').contains('Posies').should('have.length', 1);
    cy.get('a').contains('Art Frames').should('have.length', 1);
  });
});
