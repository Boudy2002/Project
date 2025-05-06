class HomePage {
  
  clickCategory(category) {
    const categoryMap = {
      Laptops: "#laptopsTxt",
      Tablets: "#tabletsTxt",
      Speakers: "#speakersTxt",
      Mice: "#miceTxt",
      Headphones: "#headphonesTxt"
    };

    const selector = categoryMap[category];
    if (!selector) throw new Error(`Unknown category: ${category}`);

    cy.get(selector).should('be.visible').click({ force: true });
    cy.url().should("include", `/category/${category}`);
  }

  addFirstProductToCart() {
      cy.get('.product').first().trigger('mouseover');
      cy.contains('ADD TO CART').click();
      cy.get('#menuCart').click(); // Assuming this opens the cart
    }
  }
  
  export default HomePage;
  