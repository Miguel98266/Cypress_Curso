// reference types="Cypress" 

let url="https://pre.coopeuch.cl/talana/simulador"
describe('Formulario talana', () => { 
    it("Enviar formulario con los campos vacios",()=>{
        // cypress code
        cy.visit(url)
        cy.viewport(1440,741)
        cy.get('.g-recaptcha').click({force: true})
        cy.get('.mage-error').should('have.length',3)
        cy.wait(5000)
        cy.get('iframe').should('not.be.visible')
    })
    it("Validar campo cantidad con un monto menor a 100,000",()=>{
        // cypress code
        cy.visit(url)
        cy.viewport(1440,741)
        cy.get('#amount').type("99999",{force: true})
        cy.get('#talana-rut').type("13244755-1",{force: true})
        cy.get('#phone').type("123456789",{force: true})
        cy.get('.form_talana').click({force: true})
        cy.get('.g-recaptcha').click({force: true})
        cy.get('.mage-error').should('have.length',1)
        cy.wait(5000)
        cy.get('iframe').should('not.be.visible')
    })
    // it("Debe de ser posible enviar formulario exitosamente",()=>{
    //     // cypress code
    //     cy.visit("https://www.coopeuch.cl/personas/talana")
    //     cy.viewport(1440,741)
    //     cy.get('#amount').type("100000",{force: true})
    //     cy.get('#talana-rut').type("13244755-1",{force: true})
    //     cy.get('#phone').type("123456789",{force: true})
    //     cy.get('.form_talana').click({force: true})
    //     cy.get('.g-recaptcha').click({force: true})
    // })
    // it("Should be able to submit a successful submission via contact us form",()=>{
    //     // cypress code
    //     cy.visit(pre)
    //     cy.get('#amount').type("100000",{force: true})
    //     cy.get('#talana-rut').type("17762523-k",{force: true})
    //     cy.get('#phone').type("123456789",{force: true})
    //     cy.get('.form_talana').click({force: true})
    //     cy.get('.g-recaptcha').click({force: true})
    // })
  
 })
 Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})