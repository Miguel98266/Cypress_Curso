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
        console.log(datos);
        // console.log((datos.Sku).split(','))
        cy.wait(8000);
        const d = datos.Sku.split(",");
        d.forEach((sku) => {
          cy.xpath(
            "(//input[@placeholder='Search entire catalogue here…'])[1]",
            {
              timeout: 5000,
            }
          )
            .clear({ force: true })
            .type(sku, { force: true })
            .type("{enter}", { force: true });
          cy.get(".productList-btnCardProduct-1bM > .sc-AxjAm", {
            timeout: 5000,
          }).click({ force: true });
          cy.wait(5000);
        });
        // Cart
        cy.get(".header-cart-kpZ > .far").click();
        cy.xpath("//button[normalize-space()='Proceed to Checkout']", {
          timeout: 10000,
        })
          .should("be.visible")
          .click({ force: true });
        // Shipping
        if (datos.Shipping == "Vitro Autoglass_Dallas 09:00 AM") {
          cy.get("input[value='vitronextroutes_VADL02_20230905']", { timeout: 30000 })
            .should("be.visible")
            .click();
        } else if (datos.Shipping == "Vitro Autoglass_Dallas 12:00 PM") {
          cy.get("input[value='vitroroutes_VADL03']", { timeout: 30000 })
            .should("be.visible")
            .click();
        } else if (datos.Shipping == "Vitro Autoglass_Dallas 02:00 PM") {
          cy.get("input[value='vitroroutes_VADL04']", { timeout: 30000 })
            .should("be.visible")
            .click();
        } else if (datos.Shipping == "Overnight") {
          cy.get("input[value='vitroovernight_VADL01']", { timeout: 30000 })
            .should("be.visible")
            .click();
        } else if (datos.Shipping == "Sending by external carrier") {
          cy.get("input[value='vitrocommoncarrier_']", { timeout: 30000 })
            .should("be.visible")
            .click();
        } else if (datos.Shipping == "Store Pickup") {
          cy.get("input[value='vitrowillcall']", { timeout: 30000 })
            .should("be.visible")
            .click();
        }

        // cy.get("input[value='vitroovernight_VADL01']", { timeout: 30000 })
        //   .should("be.visible")
        //   .click();
        cy.get("button").contains("Next").click();
        // Payment
        switch (datos.Payment) {
          case "Credito":
            cy.get("input[value='companycredit']", { timeout: 30000 })
              .should("be.visible")
              .click({ force: true });
            break;
          case "Tarjeta":
            let t = [
              "MasterCard XXXX-5100",
              "Visa XXXX-0010",
              "MasterCard XXXX-0640",
              "MasterCard XXXX-5454",
              "MasterCard XXXX-5454",
            ];
            cy.get("input[value='paradoxlabs_firstdata']", { timeout: 30000 })
              .should("be.visible")
              .click({ force: true });
            cy.get("select", { timeout: 5000 }).should("be.visible").click();
            cy.get("#", t[Math.floor(Math.random() * 6)]).click();
            break;
          default:
            break;
        }

        cy.get("button")
          .contains("Place", { timeout: 30000 })
          .should("be.visible")
          .click({ force: true });
        // Success
        cy.wait(20000);
        cy.get(".col-8.col-12.successCheckout-text-2wX")
          .invoke("text")
          .as("order");
        cy.get("@order").then((order) => {
          cy.writeFile("cypress/fixtures/Orders.txt", order.split(":")[1], {
            flag: "a+",
          });
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
