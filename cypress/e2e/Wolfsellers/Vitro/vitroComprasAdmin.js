describe("Buy as a customer loggued ", () => {
  it("Should be able to buy a product quickorder", () => {
    cy.visit("https://mcstaging.vitroautoglass.com/admin/", {
      onBeforeLoad(win) {
        delete win.navigator.__proto__.serviceWorker;
      },
    });
    cy.viewport(1440, 741);
    cy.wait(3000);
    cy.clearCookies();
    // Login
    cy.fixture("example").then((data) => {
      cy.get("#username").type("raulperez");
      cy.get("#login").type("V1tRO&S3g22%");
      cy.get(".action-login").click();
    });
    // Search

    
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
