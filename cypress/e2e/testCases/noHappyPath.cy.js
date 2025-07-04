import LoginPage from '../../support/pages/LoginPage';
import ProductPage from '../../support/pages/ProductPage';
import CartPage from '../../support/pages/CartPage';
import CheckoutPage from '../../support/pages/CheckoutPage';
import ContactPage from '../../support/pages/ContactPage';
import ProfilePage from '../../support/pages/ProfilePage';
import HomePage from '../../support/pages/HomePage';
import 'cypress-mochawesome-reporter/register';

describe('No Happy Path', () => {
  it('1 - Registro con email ya existente', () => {
    LoginPage.navigateToLogin();
    LoginPage.enterName('Juan');
    LoginPage.enterEmail('juan@test.com');
    LoginPage.clickSignupButton();
    LoginPage.verifyEmailAlreadyExistsError();
  });

  it('2 - Login con credenciales inválidas', () => {
    LoginPage.navigateToLogin();
    LoginPage.login('fake@test.com', 'wrongpass');
    LoginPage.verifyLoginError();
  });

  it('3 - Checkout sin productos', () => {
    CartPage.goToCart();
    CheckoutPage.checkoutEmptyCart();
    CheckoutPage.clickHereToBuy();
  });

  it('4 - Enviar formulario de contacto incompleto', () => {
    ContactPage.goToContact();
    ContactPage.sendMessage();
    ContactPage.verifyFormValidationError();
  });

  it('5 - Buscar producto inexistente', () => {
    ProductPage.goToProducts();
    ProductPage.searchProduct('xxxxxxxx');
    ProductPage.verifyNoResultsFound();
  });

  it('6 - Suscripción con email inválido', () => {
    LoginPage.navigateToLogin();
    HomePage.enterSubscriptionEmail('invalidemail');
    HomePage.clickSubscribe();
    HomePage.verifyInvalidEmailError();
  });

  it('7 - No permite modificar perfil (no existe url)', () => {
    LoginPage.navigateToLogin();
    ProfilePage.goToProfile();
    ProfilePage.noExistingUrl();
  });

  it('8 - Filtrar categoría inexistente', () => {
    ProductPage.filterByInvalidCategory();
    ProductPage.verifyNoCategoryResults();
  });

  it('9 - Login con campos vacíos', () => {
    LoginPage.navigateToLogin();
    LoginPage.clickLoginWithoutData();
    LoginPage.verifyValidationError();
  });

  it('10 - Filtrar por marca inexistente', () => {
    ProductPage.goToProducts();
    ProductPage.filterByBrand('marca falsa');
    ProductPage.verifyNoResultsFound();
  });
});
