
let productos=["DW01308GTN","FW00673GBN000000002000007938","FW00799GBN000000002000008237"]
describe("Buy as a customer loggued ", () => {
  it("Should be able to buy a product quickorder", () => {
    cy.visit("https://mcstaging.vitroautoglass.com/");
    cy.viewport(1440, 741);
    cy.wait(3000);
    cy.clearCookies()
    cy.get("div[class='form-group text-left'] input[name='email']").type(
      "fw88glass.gmail.com@yopmail.com"
    );
    cy.get("input[name='password']").type("Mexico01#");
    cy.get("button[type='submit']").click();
    for (let p in productos){
      cy.get(
        "div[class='header-widthSearch-2jx onlyDesktop'] input[placeholder='Search entire catalogue here…']"
      ).clear()
        .type(p)
        .type("{enter}");
      cy.get('.productList-btnCardProduct-1bM > .sc-AxjAm').click()
    }
    cy.get('.header-cart-kpZ > .far').click()
    cy.wait(10000);
    cy.get('.quickOrder-module-root-rtW > :nth-child(2)').click()
    cy.get('#react-select-11-option-1').click()
    cy.wait(10000);
    // cy.get('.quickOrder-module-root-rtW > :nth-child(3)').click()
    // cy.get('.css-1uccc91-singleValue').contains("Company Credit").click()
    // cy.get("button").contains("Quick Order")
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
