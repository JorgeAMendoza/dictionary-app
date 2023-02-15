/// <reference types="cypress" />

describe('searching for word', () => {
  beforeEach(() => {
    cy.intercept('https://api.dictionaryapi.dev/api/v2/entries/en/software', {
      statusCode: 200,
      fixture: 'software.json',
    });
    cy.intercept('https://api.dictionaryapi.dev/api/v2/entries/en/asdf', {
      statusCode: 200,
      fixture: 'asdf.json',
    });
    
    cy.visit('/');
    cy.get('[data-testid="searchBar"]').as('searchBar');
    cy.get('[data-testid="wordTitle"').as('wordTitle');
    cy.get('[data-testid="wordPronuc"]').as('wordPronuc');
    cy.get('[data-testid="playAudioButton"]').as('playAudioButton');
    cy.get('[data-testid="wordAudio"]').as('wordAudio');
    cy.get('[data-testid="wordNoun"]').as('wordNoun');
    cy.get('[data-testid="wordVerb"]').as('wordVerb');
    cy.get('[data-testid="wordMeaningVerb"]').as('wordMeaningVerb');
    cy.get('[data-testid="wordMeaningNoun"]').as('wordMeaningNoun');
    cy.get('[data-testid="wordSource"').as('wordSource');
  });

  it('search for word "software", successfull search, word data is displayed', () => {
    cy.searchWord('software');

    cy.get('@wordTitle').should('contain.text', 'software');
    cy.get('@wordPronuc').should('contain.text', '"/ˈsɑftˌwɛɹ/"');
    cy.get('@wordAudio')
      .should('have.attr', 'src')
      .should(
        'have.value',
        'https://api.dictionaryapi.dev/media/pronunciations/en/software-us.mp3'
      );

    cy.get('@wordNoun').children().should('have.length', 2);

    cy.get('@wordVerb').should('not.exist');
    cy.get('[data-cy="nounSynonyms"]').should('not.exist');
  });

  it('search for term "asdf", bad search, error component rendered', () => {
    cy.searchWord('asdf');

    cy.get('[data-cy="errorMessage"]')
      .find('h1')
      .should('contain.text', 'no definition found');
  });

  it('search for empty term, bad search, only error message text displayed', () => {
    cy.searchWord('');

    cy.get('[data-cy="errorText"]').should(
      'contain.text',
      "Whoops, can't be empty..."
    );

    cy.get('@wordTitle').should('contain.text', 'keyboard');
  });
});
