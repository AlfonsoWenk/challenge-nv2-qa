import HomeElements from '../elements/HomeElements';

class HomePage {
  searchProduct(name) {
    cy.get(HomeElements.searchInput).type(name);
    cy.get(HomeElements.searchButton).click();
  }

  enterSubscriptionEmail(email) {
    cy.get(HomeElements.subscriptionInput).type(email);
  }

  clickSubscribe() {
    cy.get(HomeElements.subscribeButtonIcon).click();
  }

  verifyInvalidEmailError() {
    cy.get(HomeElements.emailFieldValidation).should('have.attr', 'required');
  }
}

export default new HomePage();
