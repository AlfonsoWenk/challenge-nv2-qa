import CheckoutElements from '../elements/CheckoutElements';

class CheckoutPage {
  proceedToCheckout() {
    cy.contains('a', CheckoutElements.checkoutLinkText).click();
    cy.contains('u', CheckoutElements.registerOrLoginText).click();
  }

  checkout() {
    cy.contains('a', CheckoutElements.checkoutLinkText).click();
  }

  checkoutEmptyCart() {
    cy.contains('b', CheckoutElements.emptyCartMessage).should('be.visible');
  }

  fillCheckoutForm({ mail, password }) {
    cy.get(CheckoutElements.loginEmail).type(mail);
    cy.get(CheckoutElements.loginPassword).type(password);
    cy.get(CheckoutElements.loginButton).click();
  }

  confirmOrder() {
    cy.contains('h2', CheckoutElements.orderReviewHeader).should('exist');
  }

  deliverToAddress() {
    cy.contains('li', CheckoutElements.deliveryAddressLine1).should('exist');
    cy.contains('li', CheckoutElements.deliveryAddressLine2).should('exist');
    cy.contains('li', CheckoutElements.deliveryAddressCountry).should('exist');
    cy.contains('li', CheckoutElements.deliveryAddressPhone).should('exist');
  }

  goToOrderHistory() {
    cy.visit(CheckoutElements.invoicePageUrl);
  }

  downloadInvoice() {
    cy.contains(CheckoutElements.downloadInvoiceButtonText).click();
  }

  verifyInvoiceDownloaded() {
    cy.readFile(CheckoutElements.invoiceFilePath).should('exist');
  }

  clickHereToBuy() {
    cy.contains(CheckoutElements.clickHereText).should('be.visible');
  }
}

export default new CheckoutPage();
