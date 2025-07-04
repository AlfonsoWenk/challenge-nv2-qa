import CartElements from '../elements/CartElements';

class CartPage {
  goToCart() {
    cy.visit(CartElements.cartUrl);
  }

  verifyProductInCart() {
    cy.contains('a', 'Men Tshirt').should('be.visible');
  }
}

export default new CartPage();
