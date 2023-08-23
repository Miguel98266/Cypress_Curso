// reference types="Cypress" 

describe('Test Contact Us form via webdriver Uni', () => { 
    it("Should be able to submit a successful submission via contact us form",()=>{
        // cypress code
        cy.visit("https://www.coopeuch.cl/personas/talana")
        cy.get('#amount').type("100000",{force: true})
        cy.get('#talana-rut').type("17762523-k",{force: true})
        cy.get('#phone').type("123456789",{force: true})
        cy.get('.form_talana').click({force: true})
        cy.get('.g-recaptcha').click({force: true})
    })
    // it("Should be able to submit a successful submission via contact us form",()=>{
    //     // cypress code
    //     cy.visit("https://pre.coopeuch.cl/talana/simulador")
    //     cy.get('#amount').type("100000",{force: true})
    //     cy.get('#talana-rut').type("17762523-k",{force: true})
    //     cy.get('#phone').type("123456789",{force: true})
    //     cy.get('.form_talana').click({force: true})
    //     cy.get('.g-recaptcha').click({force: true})
    // })
  
 })