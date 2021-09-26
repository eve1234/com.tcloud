describe("Signup Page tests", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  ////1. Create an account
  it("should sign up", () => {
    cy.get('.accent-link > span').click()
    cy.get('#mat-input-2').type("egge1@gmail.com");
    cy.get('#mat-input-3').type("Billy White");
    cy.get('#mat-input-4').type("eddE264Tun");
    cy.get('#mat-input-5').type("eddE264Tun");
    cy.get('#continue-button').click();
    cy.get('.err-title').should('contain', 'Sorry, that username')
      
  });
});
