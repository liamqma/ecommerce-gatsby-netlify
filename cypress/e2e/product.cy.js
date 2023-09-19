describe('product page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/product/a-field-trip/');
  });

  it('changes main change when clicking on thumbnail', () => {
    const mainImage = cy.get('img[alt="A Field Trip main"]');
    const thumbnail = cy.get('img[alt="A Field Trip (2)"]');

    thumbnail.click();

    thumbnail.invoke('attr', 'src').then((src) => {
      mainImage.should('have.attr', 'src', src);
    });
  });

  it('adds a product to cart', () => {
    const productName = 'A Field Trip';

    // click on "Add to cart"
    cy.get('button').contains('Add to cart').click();

    // See a confirmation
    cy.contains(`${productName} has been added to your cart.`);
    cy.get('button').contains('CONTINUE SHOPPING').click();

    // Click on "View cart"
    cy.get('a[href="/cart/"]').click();

    // See the product in the cart
    cy.contains(productName);
  });
});
