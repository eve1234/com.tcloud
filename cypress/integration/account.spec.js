describe('account page tests',() =>{
    beforeEach(() => {
        cy.visit("/signin")
        cy.login()
      });

     //should upload file
  it('should upload file',() =>{
    cy.url().should("include", "/auth/signin")
    cy.get('.mat-subheader').should('have.text','MY ACCOUNT')
    cy.get('.add-file-button').click()
    cy.contains('Upload files').click().attachFile("file1.pdf")
    });

  //should download file
  it('should download file',() =>{
    cy.url().should("include", "/auth/signin");
    cy.get('.mat-subheader').should('have.text','MY ACCOUNT')
    cy.get('.file-checkbox').click()
    cy.getBySelAs('download-2').click()
    cy.wait(5000)
    cy.get('.main').should('have.text','All downloads finished')

  });

});