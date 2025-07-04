import LoginElements from '../elements/LoginElements';

class LoginPage {
  navigateToLogin() {
    cy.visit("/login");
  }

  enterName(name) {
    cy.get(LoginElements.signupName).type(name);
  }

  enterEmail(email) {
    cy.get(LoginElements.signupEmail).type(email);
  }

  clickSignupButton() {
    cy.get(LoginElements.signupButton).click();
  }

  completeRegistrationForm({
    password,
    first_name,
    last_name,
    address,
    state,
    city,
    zip_code,
    mobile_number,
  }) {
    cy.get(LoginElements.password).type(password);
    cy.get(LoginElements.firstName).type(first_name);
    cy.get(LoginElements.lastName).type(last_name);
    cy.get(LoginElements.address).type(address);
    cy.get(LoginElements.state).type(state);
    cy.get(LoginElements.city).type(city);
    cy.get(LoginElements.zipCode).type(zip_code);
    cy.get(LoginElements.mobileNumber).type(mobile_number);
  }

  clickCreateAccount() {
    cy.get(LoginElements.createAccountButton).click();
  }

  verifyWelcomeMessage() {
    cy.contains(LoginElements.welcomeMessage).should("be.visible");
  }

  login(email, password) {
    cy.get(LoginElements.loginEmail).type(email);
    cy.get(LoginElements.loginPassword).type(password);
    cy.get(LoginElements.loginButton).click();
  }

  register(email, password) {
    this.login(email, password); 
  }

  verifyLoginSuccess() {
    cy.contains(LoginElements.logoutButton).should("be.visible");
  }

  logout() {
    cy.contains(LoginElements.logoutButton).should("be.visible").click();
  }

  verifyLoggedOut() {
    cy.url().should("include", "/login");
  }

  verifyEmailAlreadyExistsError() {
    cy.contains(LoginElements.emailExistsError).should("be.visible");
  }

  verifyLoginError() {
    cy.contains(LoginElements.loginError).should("be.visible");
  }

  clickLoginWithoutData() {
    cy.get(LoginElements.loginButton).click();
  }

  verifyValidationError() {
    cy.get(LoginElements.loginEmail).should('have.attr', 'required');
  }
}

export default new LoginPage();
