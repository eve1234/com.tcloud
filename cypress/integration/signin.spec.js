describe("account page tests", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  //Signin/out test
  it("Should signin", () => {
    cy.login()
    cy.url().should("include", "/auth/signin");
    cy.contains('MY ACCOUNT').should('have.text','MY ACCOUNT')
    cy.get('.user-avatar > .ng-star-inserted').click()
    cy.contains('Logout').click()
    cy.contains('Create an account').should('be.visible')
  }); 


});
