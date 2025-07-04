import ContactElements from '../elements/ContactElements';

class ContactPage {
  goToContact() {
    cy.visit(ContactElements.url);
  }

  fillContactForm({ name, email, subject, message }) {
    cy.get(ContactElements.nameInput).type(name);
    cy.get(ContactElements.emailInput).type(email);
    cy.get(ContactElements.subjectInput).type(subject);
    cy.get(ContactElements.messageTextarea).type(message);
  }

  sendMessage() {
    cy.get(ContactElements.submitButton).click();
  }

  verifyMessageSent() {
    cy.contains(ContactElements.successMessage).should('be.visible');
  }

  verifyFormValidationError() {
    cy.get(ContactElements.requiredField).should('have.attr', 'required');
  }
}

export default new ContactPage();
