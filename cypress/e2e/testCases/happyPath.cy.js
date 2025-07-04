import LoginPage from "../../support/pages/LoginPage";
import ProductPage from "../../support/pages/ProductPage";
import CartPage from "../../support/pages/CartPage";
import CheckoutPage from "../../support/pages/CheckoutPage";
import ContactPage from "../../support/pages/ContactPage";
import HomePage from "../../support/pages/HomePage";
import 'cypress-mochawesome-reporter/register';


const timestamp = Date.now();
const user = {
  name: "Juana Tester",
  email: `usuario_${timestamp}@test.com`,
  password: "Test123!",
  first_name: "Juana",
  last_name: "Tester",
  address: "Av. Siempre Viva 123",
  state: "ARG",
  city: "Cordoba",
  zip_code: "5000",
  mobile_number: "1234567890",
};

describe("Happy Path", () => {
  it("1 - Registro de nuevo usuario", () => {
    LoginPage.navigateToLogin();
    LoginPage.enterName(user.name);
    LoginPage.enterEmail(user.email);
    LoginPage.clickSignupButton();
    LoginPage.completeRegistrationForm(user);
    LoginPage.clickCreateAccount();
    LoginPage.verifyWelcomeMessage();
  });

  it("2 - Login exitoso", () => {
        const userJuan = {
      email: "juan@test.com",
      password: "Test123!",
    };
    LoginPage.navigateToLogin();
    LoginPage.login(userJuan.email, userJuan.password);
    LoginPage.verifyLoginSuccess();
  });

  it("3 - Añadir producto al carrito", () => {
    ProductPage.goToProducts();
    ProductPage.addFirstProductToCart();
    CartPage.goToCart();
    CartPage.verifyProductInCart();
  });

  it("4 - Visualizar detalles del producto", () => {
    ProductPage.goToProducts();
    ProductPage.viewFirstProductDetails();
    ProductPage.verifyProductDetailsVisible();
  });

  it("5 - Buscar un producto", () => {
    ProductPage.goToProducts();
    HomePage.searchProduct("dress");
    ProductPage.verifySearchResults("dress");
  });

  it("6 - Aplicar filtro por categoría", () => {
    ProductPage.goToProducts();
    ProductPage.filterByCategory("Women > Dress");
    ProductPage.verifyCategoryResults("Dress");
  });

  it("7 - Completar checkout", () => {
    ProductPage.goToProducts();
    ProductPage.addFirstProductToCart();
    CartPage.goToCart();
    CartPage.verifyProductInCart();
    CheckoutPage.proceedToCheckout();
    CheckoutPage.fillCheckoutForm({
      mail: "juan@test.com",
      password: "Test123!",
    });
    CartPage.goToCart();
    CheckoutPage.checkout();
    CheckoutPage.confirmOrder();
  });

  it("8 - Controlar dirección de envio", () => {
    const userJuan = {
      email: "juan@test.com",
      password: "Test123!",
    };
    LoginPage.navigateToLogin();
    LoginPage.register(userJuan.email, userJuan.password);
    CartPage.goToCart();
    CheckoutPage.checkout();
    CheckoutPage.deliverToAddress();
  });

  it("9 - Contactar a soporte", () => {
    ContactPage.goToContact();
    ContactPage.fillContactForm({
      name: "Juan",
      email: "juan@test.com",
      subject: "Soporte",
      message: "Necesito ayuda",
    });
    ContactPage.sendMessage();
    ContactPage.verifyMessageSent();
  });

  it("10 - Cerrar sesión", () => {
    const userJuan = {
      email: "juan@test.com",
      password: "Test123!",
    };
    LoginPage.navigateToLogin();
    LoginPage.login(userJuan.email, userJuan.password);
    LoginPage.logout();
    LoginPage.verifyLoggedOut();
  });
});
