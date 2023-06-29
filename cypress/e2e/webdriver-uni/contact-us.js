// reference types="Cypress" 



describe('Test Contact Us form via webdriver Uni', () => { 
    it("Should be able to submit a successful submission via contact us form",()=>{
        // cypress code
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type("Miguel")
        cy.get('[name="last_name"]').type("Calixto")
        cy.get('[name="email"]').type("miguel@gmail.com")
        cy.get('textarea.feedback-input').type("comment")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })
    it("Should not be able to submit a successful submission via contact us form as all fieds are required",()=>{
        // cypress code
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type("Angel")
        cy.get('[name="last_name"]').type("Serrano")
        cy.get('textarea.feedback-input').type("comment")
        cy.get('[type="submit"]').click()
        cy.get('body').should('have.text',"Error: all fields are required")
    })
 })