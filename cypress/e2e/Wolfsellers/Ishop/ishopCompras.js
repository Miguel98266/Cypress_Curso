describe('Buy as a customer loggued ', () => {
    it("Should be able to buy a product with Niubiz", () => {
        // cypress code
        // cy.visit("https://mcstaging.wolf-ishop.com/pe/customer/account/login/referer/aHR0cHM6Ly9tY3N0YWdpbmcud29sZi1pc2hvcC5jb20vcGUv/")
        // cy.viewport(1440, 741)
        // cy.clearCookies()
        // cy.get('#email').type("miguelcalixto@wolfsellers.com", { force: true })
        // cy.get('#pass').type("Mexico01", { force: true })
        // cy.get('#send2').click()
        // // cy.get('#ui-id-7').click()
        // cy.get('#ui-id-6').click()
        // cy.get('.product-item-link').contains("AirPods con Case de Carga").click()
        // cy.get('.product-item-link').contains("Apple Watch Series 7 GPS (41mm) Verde").click()
        cy.visit('https://mcstaging.wolf-ishop.com/pe/iphone-11-64gb-negro-mhda3lz-aa')
        cy.viewport(1440, 741)
        cy.wait(3000)
        cy.get('.tab-store-pickup.item.title').click()
        // cy.get('.switch').contains('Recoger en tienda').click()
        cy.get('.select-source').contains('Selecciona tienda').click()
        cy.get('#source-PVTTCC_PE').click({force:true})
        cy.get('.action').contains("Seleccionar").click()
        cy.wait(1000)
        cy.get('#product-addtocart-button').click({force:true})
        cy.wait(3000)
        cy.get('#top-cart-btn-checkout').click()
        cy.wait(5000)
        cy.get('#customer-email').type('miguelcalixto@wolfsellers.com')
        cy.get('#MT4RI3E').type('12345678')
        cy.get('#JXXPXPS').type('Miguel')
        cy.get('#BT02K02').type('Calixto')
        cy.get('#X65TTRI').type('12345678')
        cy.get('#J47Q7O2').type('Calle referencia')
        cy.get('select').select('Ancash')
        // cy.get('#agreement_6').click()
        // cy.get('#continue-to-payment-trigger').click()
        // cy.get('#billing-address-same-as-shipping-visanet_pay').click()
        // cy.get('#billing-address-same-as-shipping-visanet_pay').click()
        // cy.get('#place-order-trigger').click()
        // cy.get('#pm001').click()

    })


})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})