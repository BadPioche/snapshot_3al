/// <reference types="cypress" />


describe('test navigation page accueil et boutons de thème', () => {
  beforeEach(() => {
    cy.visit('/mountain');
  })

  it('navigation par default arrive sur Moutain filter page', () => {
    cy.get('h2').contains('mountain')
    cy.get('[data-cy="image"]').should('be.visible')
  })

  it('clicker sur le bouton Beaches amene sur une autre route Beach', () => {
    cy.get('a').contains('Beaches').click();
    cy.get('h2').contains('beach');

    cy.url().should("include", "/beach");
    cy.get('[data-cy="image"]').should('be.visible')

  })

  it('clicker sur le bouton Birds amene sur une autre route Birds', () => {
    cy.get('a').contains('Birds').click();
    cy.get('h2').contains('bird');

    cy.url().should("include", "/bird");
    cy.get('[data-cy="image"]').should('be.visible')

  })

  it('clicker sur le bouton Food amene sur une autre route Food', () => {
    cy.get('a').contains('Food').click();
    cy.get('h2').contains('food');

    cy.url().should("include", "/food");
    cy.get('[data-cy="image"]').should('be.visible')

  })

  it('clicker sur le bouton Moutain amene sur une autre route Moutain', () => {
    cy.get('a').contains('Food').click();
    cy.get('h2').contains('food');

    cy.url().should("include", "/food");


    cy.get('a').contains('Mountain').click();
    cy.get('h2').contains('mountain');

    cy.url().should("include", "/mountain");
    cy.get('[data-cy="image"]').should('be.visible')

  })
})