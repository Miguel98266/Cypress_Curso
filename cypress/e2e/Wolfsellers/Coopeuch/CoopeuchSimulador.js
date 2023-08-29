let url_home = "https://www.coopeuch.cl/";
let url_directa = "https://www.coopeuch.cl/personas/simulador/consumo/inicio";
describe("Formulario Simulador Home", () => {

    it("Enviar formulario Home exitosamente", () => {
      // cypress code
      cy.visit(url_home);
      cy.clearCookies()
      cy.viewport(1440, 741);
      cy.wait(5000);
      cy.get('.dy-lb-close').click()
      cy.get('#amount').type('200000')
      cy.get("#simulator-rut").type('14191368-9')
      cy.get("#simulator-phone").type('123456783')
      
      cy.get(".button-simulate").click()
      cy.get(".button-coopeuch-2").first().click()
      cy.wait(2000)
      cy.get('#name').type('Miguel Calixto')
      cy.get('#email').type('miguelcalixto@wolfsellers.com')
      cy.get('#submitForm').click()
      cy.wait(3000)
      cy.get('.title').contains("Hemos")
      cy.screenshot({capture:'runner'})
    });
    it.only("Enviar formulario Url directa exitosamente", () => {
        // cypress code
        cy.visit(url_directa);
        cy.clearCookies()
        cy.viewport(1440, 741);
        cy.wait(5000);
        cy.get('#amount').type('500000')
        cy.get("#simulator-rut").type('14191368-9')
        cy.get("#simulator-phone").type('123456783')
        cy.get(".button-simulate").click({force:true})
        cy.get(".button-coopeuch-2").first().click()
        cy.wait(2000)
        cy.get('#name').type('Miguel Calixto')
        cy.get('#email').type('miguelcalixto@wolfsellers.com')
        cy.get('#submitForm').click()
        cy.wait(3000)
        cy.get('.breadcrumb-productos').contains("Productos").scrollIntoView()
        cy.screenshot({capture:'runner'},"Url directa "+Date.now())
      });
  });
  