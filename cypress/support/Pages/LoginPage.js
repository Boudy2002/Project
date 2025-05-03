class LoginPage {
  getUsernameInput() {
    return cy.get('input[name="username"]', { timeout: 30000 })
  }

  getPasswordInput() {
    return cy.get('input[name="password"]', { 
      timeout: 30000 
    })
  }

  getLoginButton() {
    return cy.get('#sign_in_btn', { 
      timeout: 30000 
    })
  }
  getErrorLabel() {
    return cy.get('#signInResultMessage', {
      timeout: 30000
    })
  }
  login(username, password) {
    this.getUsernameInput().should('be.visible').type(username)
    this.getPasswordInput().should('be.visible').type(password)
    this.clickLoginButton()
  }
  checkErrorLabel() {
    this.getErrorLabel().should('contain.text', 'Incorrect user name or password.')
  }
  clickLoginButton() {
    cy.get('.loader', { timeout: 10000 }).should('not.be.visible')
    cy.get('#sign_in_btn').should('be.visible').click()
  }

  verifyUsername(){
    cy.fixture('SignInUser').then((user) => {
        cy.get('.hi-user').should('contain.text', user.username);
    });
}
}
  
  export default new LoginPage()