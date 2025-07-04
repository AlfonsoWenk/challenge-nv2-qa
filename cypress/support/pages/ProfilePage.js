import ProfileElements from '../elements/ProfileElements';

class ProfilePage {
  goToProfile() {
    cy.visit(ProfileElements.profileUrl);
  }

  noExistingUrl() {
    cy.url().should("not.include", ProfileElements.profileUrl); 
    cy.contains(ProfileElements.profilePageTitle).should("not.exist");
  }

  clearName() {
    cy.get(ProfileElements.nameInput).clear();
  }

  saveProfile() {
    cy.get(ProfileElements.saveButton).click();
  }

  verifyValidationError() {
    cy.contains(ProfileElements.validationMessage).should("be.visible");
  }
}

export default new ProfilePage();
