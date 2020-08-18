/// <reference types="cypress" />

describe('Confirmationme', function() {

    it('Price', function() {
    
       cy.visit("https://demo.nopcommerce.com/")
    
       cy.get("#small-searchterms").click().type("Apple MacBook Pro 13-inch")
    
       cy.get(".search-box-button").click()
    
       //cy.get('#customerCurrency').click()
    
       cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

       cy.get("#product_enteredQuantity_4").clear().type('4')

       cy.get("#add-to-cart-button-4").click()
       cy.wait(2000)

       cy.get(".cart-label").click()

       //cy.visit("https://demo.nopcommerce.com/cart")
       //cy.wait(3000)
       
       cy.get(".product-subtotal").contains("$7,200.00")
    
    })
   
   })
   