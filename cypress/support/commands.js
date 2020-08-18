// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//File Upload command
import 'cypress-file-upload';
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


//-- Radya Labs --
Cypress.Commands.add("login", (email, password) => { 
       cy.visit('http://staging.radyalabs.id:7008')
       cy.get('#app_login_form_username').type(email)
       cy.get('[type=password]').type(password)
       cy.get('#app_login_form_btn_signin').click()
    
    })
