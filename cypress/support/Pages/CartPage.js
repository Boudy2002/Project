class CartPage {

    chooseQuantity(quantity){
      cy.get('input[name="quantity"]').clear().type(quantity.toString());
      cy.readFile('cypress/data/OrderData.json').then((data = {}) => {
        data.quantity = parseInt(quantity);
        cy.writeFile('cypress/data/OrderData.json', data);
      });
    }

    addToCart(){
      let productPrice = 0;
      cy.get('h1.roboto-regular.screen768.ng-binding').scrollIntoView().invoke('text').then((text) => {
        const productName = text.trim();
        cy.readFile('cypress/data/OrderData.json').then((data) => {
          data.product = productName;
          cy.writeFile('cypress/data/OrderData.json', data);
        });
      });
      cy.get('h2.roboto-thin.screen768.ng-binding').invoke('text').then((rawText) => {
        const priceText = rawText.trim().split('\n')[0].trim();
        productPrice = parseFloat(priceText.replace(/[^0-9.]/g, ''));
        cy.readFile('cypress/data/OrderData.json').then((data) => {
          data.price = productPrice;
          cy.writeFile('cypress/data/OrderData.json', data);
        });
      });
      cy.get('button[name="save_to_cart"]').should("be.visible").click();
    }

    verifyCartItemCount() {
      cy.readFile('cypress/data/OrderData.json').then((data) => {
        cy.get('#shoppingCartLink .cart.ng-binding').should('have.text', data.quantity.toString());
      });
    }

    verifyItemExist() {
      cy.get('#shoppingCartLink .cart.ng-binding').invoke('text').then((text) => {
      const count = parseInt(text.trim(), 10);
      expect(count).to.be.greaterThan(0);
    });
    }

    removeProductFromCart() {
      cy.get('#shoppingCartLink').trigger('mouseover');
      cy.get('#toolTipCart').should('be.visible');
      cy.get('#toolTipCart .removeProduct').first().click();
    }
  
    verifyCartIsEmpty() {
      cy.get('#toolTipCart').should('contain.text', 'Your shopping cart is empty');
      cy.get('#shoppingCartLink .cart.ng-binding').should('have.text', '0');
    }

    verifyCartCalculations(){
      cy.readFile('cypress/data/OrderData.json').then((data) => {
        const expectedTotal = (data.price * data.quantity).toFixed(2);
        cy.get('#shoppingCartLink').trigger('mouseover');
        cy.get('#toolTipCart').should('be.visible');
        cy.get('#toolTipCart .cart-total')
          .invoke('text')
          .then((totalText) => {
            const actualTotal = totalText.replace('$', '').trim();
            expect(actualTotal.replace(/,/g, '')).to.equal(expectedTotal);
          });
        cy.get('tfoot label.roboto-regular.ng-binding')
          .invoke('text')
          .then((itemLabel) => {
            const actualQty = parseInt(itemLabel.replace(/\D/g, ''));
            expect(actualQty).to.eq(data.quantity);
          });
      });
    }
  }
  
  export default CartPage;
  