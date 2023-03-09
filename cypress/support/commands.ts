/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

Cypress.Commands.add('searchWord', (word: string) => {
  cy.get('[data-cy="searchWord"]').type(word);
  cy.get('[data-cy="searchWordButton"]').click();
});
