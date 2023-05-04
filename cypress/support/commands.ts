Cypress.Commands.add('searchWord', (word: string) => {
  if (!word) {
    cy.get('[data-cy="searchBar"]').clear();
    cy.get('[data-cy="searchWordButton"]').click();
    return;
  }
  cy.get('[data-cy="searchBar"]').clear().type(word);
  cy.get('[data-cy="searchWordButton"]').click();
});

export {};
