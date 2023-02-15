/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
export {};
// command to search for word

Cypress.Commands.add('searchWord', (word: string) => {
  cy.get('[data-cy="searchWord"]').type(word);
  cy.get('[data-cy="searchWordButton"]').click();
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      searchWord(word: string): Chainable<void>;
    }
  }
}
