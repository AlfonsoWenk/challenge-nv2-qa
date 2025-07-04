import ProductElements from '../elements/ProductElements';

class ProductPage {
  goToProducts() {
    cy.visit(ProductElements.productsUrl);
  }

  addFirstProductToCart() {
    cy.get(ProductElements.firstProductAddToCartButton).click();
    cy.get(ProductElements.addToCartModalCloseButton).click();
  }

  viewFirstProductDetails() {
    cy.get(ProductElements.viewProductLink).eq(1).first().contains('View Product').click();
  }

  verifyProductDetailsVisible() {
    cy.get(ProductElements.productDetailsContainer).should('be.visible');
  }

  searchProduct(name) {
    cy.get(ProductElements.searchInput).type(name);
    cy.get(ProductElements.searchButtonIcon).click();
  }

  verifySearchResults() {
    cy.get(ProductElements.searchResultsContainer).contains(/dress/i).should('be.visible');
  }

  filterByCategory(category) {
    cy.get(ProductElements.categorySearchInput).type(category);
  }

  verifyCategoryResults(expected) {
    cy.contains(expected).should('exist');
  }

  filterByInvalidCategory() {
    cy.request({
      url: '/category_products/something',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  }

  verifyNoCategoryResults() {
    cy.get(ProductElements.productCard).should('have.length', 0);
  }

  filterByBrand(brand) {
    cy.visit(`/brand_products/${brand}`);
  }

  verifyNoResultsFound() {
    cy.get(ProductElements.productCard).should('have.length', 0);
  }
}

export default new ProductPage();
