/// <reference types="cypress" />

context('test suite', () => {
    beforeEach(() => {
      cy.visit('https://google.com')
    })
  
    it('test', () => {
        cy.xpath('//input[@role=\'combobox\']')
            .should('not.be.visible')
      })
})
  