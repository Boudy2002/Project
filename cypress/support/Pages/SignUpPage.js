class SignUpPage {
    finalUsername;
    
    fillUsername(username) {
      cy.get('input[name="usernameRegisterPage"]').type(username)
      this.finalUsername = username;
    }

    fillExistingUsername() {
        const Fakeusername = `user_${Math.random().toString(36).substring(2, 10)}`;
        cy.get('input[name="usernameRegisterPage"]').type(Fakeusername);
        this.finalUsername = Fakeusername;

    }

    fillEmail(email) {
      cy.get('input[name="emailRegisterPage"]').type(email)
    }
  
    fillPassword(password) {
      cy.get('input[name="passwordRegisterPage"]').type(password)
      cy.get('input[name="confirm_passwordRegisterPage"]').type(password, { force: true })
    }
  
    fillPersonalDetails({ firstName, lastName, phone }) {
      cy.get('input[name="first_nameRegisterPage"]').type(firstName, { force: true })
      cy.get('input[name="last_nameRegisterPage"]').type(lastName, { force: true })
      cy.get('input[name="phone_numberRegisterPage"]').type(phone, { force: true })
    }
  
    fillAddress({ country, city, address, state, postalCode }) {
      cy.get('select[name="countryListboxRegisterPage"]').select(country, { force: true })
      cy.get('input[name="cityRegisterPage"]').type(city, { force: true })
      cy.get('input[name="addressRegisterPage"]').type(address, { force: true })
      cy.get('input[name="state_/_province_/_regionRegisterPage"]').type(state, { force: true })
      cy.get('input[name="postal_codeRegisterPage"]').type(postalCode, { force: true })
    }
  
    acceptTerms() {
      cy.get('input[name="i_agree"]').check()
    }
  
    clickRegister() {
      cy.get('#register_btn').click()
    }
  
    signUp(user) {
      this.fillUsername(user.username)
      this.fillEmail(user.email)
      this.fillPassword(user.password)
      this.fillPersonalDetails(user)
      this.fillAddress(user)
      this.acceptTerms()
    }

    signUpNew(user) {
      this.fillExistingUsername()
      this.fillEmail(user.email)
      this.fillPassword(user.password)
      this.fillPersonalDetails(user)
      this.fillAddress(user)
      this.acceptTerms()
    }
    
    verifyUsername(){
        cy.fixture('SignUpUser').then((user) => {
            cy.get('.hi-user').should('contain.text', this.finalUsername);
        });
    }

    checkErrors(){
        cy.get('#register_btn').should('be.disabled');
    }

    checkExistance(){
        cy.get('label.center.invalid').should('be.visible').and('contain.text', 'User name already exists')
    }
  }
  
  export default new SignUpPage()  