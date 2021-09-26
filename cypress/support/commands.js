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
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
  });
  
  Cypress.Commands.add("getBySelLike", (selector, ...args) => {
    return cy.get(`[data-test*=${selector}]`, ...args);
  });

  Cypress.Commands.add("getBySelAs", (selector, ...args) => {
    return cy.get(`[data-mat-icon-name*=${selector}]`, ...args);
  });

  Cypress.Commands.add("loginByPass",() =>{
    cy.request({
      url: "https://app.tcloud.dev.anqlave.io/api/v1/login",
      method: "POST",
      body:
       // {username: "evevoni@gmail.com",…},
       // pwdhash: "8040f028137b2911992e18c3431d31a3e0b9a84825f97ea1276772ccf2d91787",
       // username: "evevoni@gmail.com"
       {"username":"evevoni@gmail.com","pwdhash":"8040f028137b2911992e18c3431d31a3e0b9a84825f97ea1276772ccf2d91787"}
    }).then(res => cy.log())
  })

  Cypress.Commands.add("login",() =>{
  cy.get('#mat-input-0').type("evevoni@gmail.com");
  cy.get('#mat-input-1').type("pleY67dcw");
  cy.get('#signin-button').click();
  })
  