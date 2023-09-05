describe("Buy as a customer loggued ", () => {
  it("Should be able to buy a product quickorder", () => {
    cy.visit("https://mcstaging.vitroautoglass.com/", {
      onBeforeLoad(win) {
        delete win.navigator.__proto__.serviceWorker;
      },
    });
    cy.viewport(1440, 741);
    cy.wait(3000);
    cy.clearCookies();
    // Login
    cy.fixture("example").then((data) => {
      cy.xpath("(//input[@name='email'])[1]").type(data.email);
      cy.get("input[name='password']").type(data.pass);
      cy.get("button[type='submit']").click();
      
    });
    // Search
    cy.fixture("csvjson").then((data) => {
      data.forEach((datos) => {
        // console.log((datos.Sku).split(','))
        cy.wait(8000)
        const d = (datos.Sku).split(",");
        d.forEach((sku) => {
          cy.xpath(
            "(//input[@placeholder='Search entire catalogue here…'])[1]",
            {
              timeout: 5000,
            }
          )
            .clear({ force: true })
            .type(sku,{ force: true })
            .type("{enter}",{ force: true });
          cy.get(".productList-btnCardProduct-1bM > .sc-AxjAm",{
            timeout: 5000,
          }).click({ force: true });
          cy.wait(5000); 
        });
      });
    });
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
