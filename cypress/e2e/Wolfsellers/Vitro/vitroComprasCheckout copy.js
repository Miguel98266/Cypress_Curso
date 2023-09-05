let productos = [
  "DW01308GTN",
  "FW00673GBN000000002000007938",
  "FW00799GBN000000002000008237",
];
console.log(productos[0]);
describe("Buy as a customer loggued ", () => {
  it("Should be able to buy a product quickorder", () => {
    cy.visit("https://mcstaging.vitroautoglass.com/", {
      onBeforeLoad(win) {
        delete win.navigator.__proto__.serviceWorker;
      },
    });
    cy.get("form > :nth-child(2) > .sc-AxhCb").invoke('text').as('name')
    cy.get('@name').then((name) => {
      
      cy.writeFile("fixtures/Orders.txt",name)
    })
    
    
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
