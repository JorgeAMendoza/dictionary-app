/// <reference types="cypress" />

describe('searching for word', () => {
  beforeEach(() => {
    cy.intercept('https://api.dictionaryapi.dev/api/v2/entries/en/software', {
      statusCode: 200,
      fixture: 'software.json',
    });
    cy.intercept('https://api.dictionaryapi.dev/api/v2/entries/en/asdf', {
      statusCode: 400,
      fixture: 'asdf.json',
    });
    cy.intercept('https://api.dictionaryapi.dev/api/v2/entries/en/pussy', {
      statusCode: 200,
      fixture: 'word.json',
    });

    cy.visit('/');
    cy.get('[data-cy="searchBar"]').as('searchBar');
    cy.get('[data-cy="wordTitle"]').as('wordTitle');
    cy.get('[data-cy="wordPronuc"]').as('wordPronuc');
    cy.get('[data-cy="audioButton"]').as('audioButton');
    cy.get('[data-cy="nounMeanings"]').as('nounMeanings');
    cy.get('[data-cy="verbMeanings"]').as('verbMeanings');
    cy.get('[data-cy="wordSource"').as('wordSource');
  });

  it.only('search for word "software", successfull search, word data is displayed', () => {
    cy.searchWord('software');

    cy.get('@wordTitle').should('contain.text', 'software');
    cy.get('@wordPronuc').should('contain.text', '/ˈsɑftˌwɛɹ/');
    cy.get('@audioButton')
      .find('audio')
      .should('have.attr', 'src')
      .should(
        'contain',
        'https://api.dictionaryapi.dev/media/pronunciations/en/software-us.mp3'
      );

    cy.get('@nounMeanings')
      .find('[data-cy="meanings"]')
      .children()
      .should('have.length', 2);
    cy.get('@nounMeanings').find('[data-cy="synonymList"]').should('not.exist');
    cy.get('@nounMeanings').find('[data-cy="anotnymList"]').should('not.exist');

    cy.get('@verbMeanings').should('not.exist');
  });

  it.only('search for term "asdf", bad search, error component rendered', () => {
    cy.searchWord('asdf');

    cy.get('[data-cy="errorMessage"]')
      .find('h1')
      .should('contain.text', 'No Definitions Found');
  });

  it.only('search for empty term, bad search, only error message text displayed', () => {
    cy.searchWord(' ');

    cy.get('[data-cy="errorText"]').should(
      'contain.text',
      "Whoops, can't be empty..."
    );

    cy.get('@wordTitle').should('contain.text', 'keyboard');
  });
});
