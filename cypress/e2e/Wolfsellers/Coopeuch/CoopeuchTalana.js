// reference types="Cypress"

let url = "https://www.coopeuch.cl/talana/simulador";
//'https://www.coopeuch.cl/talana/simulador'
// 'https://www.coopeuch.cl/personas/talana/simulador'
//"https://pre.coopeuch.cl/talana/simulador"

describe("Formulario talana", () => {
  it("Enviar formulario con los campos vacios", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get(".g-recaptcha").click({ force: true });
    cy.get(".mage-error").should("have.length", 3);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
  it("Seleccionar campo monto y dar clic en enviar", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type(' ')
    cy.get(".form_talana").click();
    cy.get(".g-recaptcha").click({ force: true });
    cy.get(".mage-error").should("have.length", 3);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
  it("Seleccionar campo rut y dar clic en enviar", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#talana-rut").type(' ')
    cy.get(".form_talana").click();
    cy.get(".g-recaptcha").click({ force: true });
    cy.get(".mage-error").should("have.length", 1);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
  it("Seleccionar campo telefono y dar clic en enviar", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#phone").type(' ')
    cy.get(".form_talana").click();
    cy.get(".g-recaptcha").click({ force: true });
    cy.get(".mage-error").should("have.length", 3);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
  it("Validar campo cantidad con un monto menor a 100,000", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type("99999", { force: true });
    cy.get("#talana-rut").type("13244755-1", { force: true });
    cy.get("#phone").type("123456789", { force: true });
    cy.get(".form_talana").click({ force: true });
    cy.get(".g-recaptcha").click({ force: true });
    cy.get(".mage-error").should("have.length", 1);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
  it("Validar campo cantidad con un monto mayor a 25,000,000", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type("25000001", { force: true });
    cy.get("#talana-rut").type("13244755-1", { force: true });
    cy.get("#phone").type("123456789", { force: true });
    cy.get(".form_talana").click({ force: true });
    cy.get(".g-recaptcha").click({ force: true });
    cy.get(".mage-error").should("have.length", 1);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
  it("Validar un rut erroneo 12112-3", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type("100000", { force: true });
    cy.get("#talana-rut").type("12112-3", { force: true });
    cy.get("#phone").type("123456789", { force: true });
    cy.get(".form_talana").click({ force: true });
    cy.get(".g-recaptcha").click({ force: true });
    cy.get(".mage-error").should("have.length", 1);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
  it("Validar un rut con una letra diferente a K", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type("100000", { force: true });
    cy.get("#talana-rut").type("98087591-A", { force: true });
    cy.get("#phone").type("123456789", { force: true });
    cy.get(".form_talana").click({ force: true });
    cy.get(".g-recaptcha").click({ force: true });
    cy.get("#talana-rut").invoke("val").should("contain", "9.808.759-1");
    // cy.get('.mage-error').should('have.length',1)
    cy.wait(5000);
    cy.get("iframe").should("be.visible");
  });
  it("Validar un rut con una letra K minuscula", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type("100000", { force: true });
    cy.get("#talana-rut").type("6371240-k", { force: true });
    cy.get("#phone").type("123456789", { force: true });
    cy.get(".form_talana").click({ force: true });
    cy.get(".g-recaptcha").click({ force: true });
    cy.get("#talana-rut").invoke("val").should("contain", "6.371.240-K");
    cy.wait(5000);
    cy.get("iframe").should("be.visible");
  });
  it("Validar un rut con una longitud mayor ", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type("100000", { force: true });
    cy.get("#talana-rut").type("6371240-345678", { force: true });
    cy.get("#phone").type("123456789", { force: true });
    cy.get(".form_talana").click({ force: true });
    cy.get(".g-recaptcha").click({ force: true });
    cy.get("#talana-rut").invoke("val").should("have.length", 12);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
  it("Validar el campo telefono con una longitud mayor a 9", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type("100000", { force: true });
    cy.get("#talana-rut").type("17762523-k", { force: true });
    cy.get("#phone").type("1234567890", { force: true });
    cy.get(".form_talana").click({ force: true });
    cy.get(".g-recaptcha").click({ force: true });
    cy.get("#phone").invoke("val").should("have.length", 9);
    // cy.wait(5000)
    // cy.get('iframe').should('not.be.visible')
  });
  it("Validar el campo telefono con una longitud menor a 9", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type("100000", { force: true });
    cy.get("#talana-rut").type("17762523-k", { force: true });
    cy.get("#phone").type("1234", { force: true });
    cy.get(".form_talana").click({ force: true });
    cy.get(".g-recaptcha").click({ force: true });
    cy.get(".mage-error").should("have.length", 1);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
  it("Al escribir datos validos en los campos se habilita el boton 'Solicitar' al tenerlo habilitado modificar el campo monto con un dato invalido y dar clic en 'Solicitar'", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type("100000", { force: true });
    cy.get("#talana-rut").type("17762523-k", { force: true });
    cy.get("#phone").type("123456789", { force: true });
    cy.get(".form_talana").click({ force: true });
    cy.get("#amount").clear().type('10')
    cy.get(".g-recaptcha").click({ force: true });
    cy.get(".mage-error").should("have.length", 1);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
  it("Al escribir datos validos en los campos se habilita el boton 'Solicitar' al tenerlo habilitado modificar el campo rut con un dato invalido y dar clic en 'Solicitar'", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type("100000", { force: true });
    cy.get("#talana-rut").type("17762523-k", { force: true });
    cy.get("#phone").type("123456789", { force: true });
    cy.get(".form_talana").click({ force: true });
    cy.get("#talana-rut").clear().type('17762523')
    cy.get(".g-recaptcha").click({ force: true });
    cy.get(".mage-error").should("have.length", 1);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
  it("Al escribir datos validos en los campos se habilita el boton 'Solicitar' al tenerlo habilitado modificar el campo telefono con un dato invalido y dar clic en 'Solicitar'", () => {
    // cypress code
    cy.visit(url);
    cy.viewport(1440, 741);
    cy.get("#amount").type("100000", { force: true });
    cy.get("#talana-rut").type("17762523-k", { force: true });
    cy.get("#phone").type("123456789", { force: true });
    cy.get(".form_talana").click({ force: true });
    cy.get("#phone").clear().type('1234')
    cy.get(".g-recaptcha").click({ force: true });
    cy.get(".mage-error").should("have.length", 1);
    cy.wait(5000);
    cy.get("iframe").should("not.be.visible");
  });
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
});
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
