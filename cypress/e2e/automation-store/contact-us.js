/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        // $ search the word in the last sentence
        // ^ search at the begining of the sentence
        cy.get("a[href$='contact']").click();
        // cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.xpath('//textarea[@id="ContactUsFrm_enquiry"]').type("Do you provide additional discount on bulk orders?")
        cy.get('button[title="Submit"]').click();
    });
})