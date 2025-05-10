class HomePage {
  
  addFirstProductToCart() {
      cy.get('.product').first().trigger('mouseover');
      cy.contains('ADD TO CART').click();
      cy.get('#menuCart').click();
  }

  goToContact(){
    cy.get('.contact_us.ng-scope.roboto-bold').scrollIntoView().should('be.visible');
  }

  fillContactForm(validity){
    if (validity == "Valid"){
      cy.get('select[name="categoryListboxContactUs"]').select("Laptops", { force:true, timeout:4000 });
      cy.get('select[name="productListboxContactUs"]').select("HP Chromebook 14 G1(ES)", { force:true, timeout:4000 });
      cy.get('input[name="emailContactUs"]').type("aboushmeila@email.com");
      cy.get('textarea[name="subjectTextareaContactUs"]').type("Cannot buy the item");
    }
    else if(validity == "Invalid"){
      cy.get('select[name="categoryListboxContactUs"]').select("Laptops", { force:true, timeout:4000 });
      cy.get('select[name="productListboxContactUs"]').select("HP Chromebook 14 G1(ES)", { force:true, timeout:4000 });
      cy.get('input[name="emailContactUs"]').type("aboushmeila.com");
    }
  }

  sendMessage(){
    cy.get('button#send_btn').click({force:true});
  }

  checkSuccess(){
    cy.get('.successMessage').should('be.visible').and('have.text', 'Thank you for contacting Advantage support.');
  }

  checkError(){
    cy.get('textarea[name="subjectTextareaContactUs"]').type("a");
    cy.get('button#send_btn').click({force:true});
    cy.get('.successMessage').should('not.be.visible');
  }
}
  
export default HomePage;
  