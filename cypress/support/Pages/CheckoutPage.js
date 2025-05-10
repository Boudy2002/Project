class CheckoutPage {
    openCart(){
        cy.get('#shoppingCartLink').click();
    }

    checkout(){
        cy.get('#checkOutPopUp').click();
        cy.get('#next_btn').click();
    }

    pay(type, paymentMethod){
        cy.fixture('PaymentMethod').then((data) => {
            const paymentData = data[type][paymentMethod];
            if (paymentMethod === 'SafePay') {
                cy.get('input[name="save_safepay"]').uncheck();
                cy.get('input[name="safepay"]').check({ force: true });
                cy.get('input[name="safepay_username"]', { timeout: 4000 }).should('be.visible').scrollIntoView().type(paymentData.username);
                cy.get('input[name="safepay_password"]').type(paymentData.password);
            }
            else if (paymentMethod === 'MasterCredit') {
                cy.get('input[name="masterCredit"]').check({ force: true });
                cy.get('input[name="save_master_credit"]').uncheck();
                cy.get('[name="card_number"]').type(paymentData.CardNumber);
                cy.get('[name="cvv_number"]').type(paymentData.CVV);
                cy.get('[name="mmListbox"]').select(paymentData.Date.Month.toString());
                cy.get('[name="yyyyListbox"]').select(paymentData.Date.Year.toString());
                cy.get('[name="cardholder_name"]').type(paymentData.Name);
            }
          });
    }

    confirmOrder(paymentMethod){
        if (paymentMethod === 'SafePay') {
            cy.get('#pay_now_btn_SAFEPAY').click();
        }
        else if (paymentMethod === 'MasterCredit') {
            cy.get('#pay_now_btn_ManualPayment').click({force: true});
        }
    }

    checkConfirmation(){
        cy.get('span.roboto-regular.ng-scope').should('be.visible').and('have.text', 'Thank you for buying with Advantage');
    }

    checkErrors(paymentMethod){
        if (paymentMethod === 'SafePay') {
            cy.get('#pay_now_btn_SAFEPAY').should(not.be.visible);
        }
        else if (paymentMethod === 'MasterCredit') {
            cy.get('#pay_now_btn_ManualPayment').should(not.be.visible);
        }
    }
}

export default CheckoutPage;