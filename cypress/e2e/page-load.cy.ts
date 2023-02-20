/// <reference types="cypress" />

describe('initial page load of application', () => {
  beforeEach(() => {
    cy.intercept('https://api.dictionaryapi.dev/api/v2/entries/en/keyboard', {
      statusCode: 2000,
      fixture: 'keyboard.json',
    });
    cy.visit('/');
    cy.get('[data-testid="searchBar"]').as('searchBar');
    cy.get('[data-testid="wordTitle"').as('wordTitle');
    cy.get('[data-testid="wordPronuc"]').as('wordPronuc');
    cy.get('[data-testid="audioButton"]').as('audioButton');
    cy.get('[data-testid="wordNoun"]').as('wordNoun');
    cy.get('[data-testid="synonyms"]').as('synomyms');
    cy.get('[data-testid="wordMeaningVerb"').as('wordMeaningVerb');
    cy.get('[data-testid="wordMeaningNoun"]').as('wordMeaningNoun');
    cy.get('[data-testid="wordSource"').as('wordSource');
  });

  it('initial search term for "keyboard" is rendered', () => {
    cy.get('@searchBar').should('have.value', 'keyboard');
    cy.get('@wordTitle').should('contain.text', 'keyboard');
    cy.get('@audioButton')
      .should('have.attr', 'src')
      .should('contain', 'keyboard-us.mpg');
    cy.get('@wordPronuc').should('contain.text', '/ˈkiːbɔːd/');

    cy.get('@wordMeaningNoun').children().should('have.length', 3);

    cy.get('@synomyms').children().should('have.length', 1);
    cy.get('@synomyms')
      .children()
      .then(($el) => {
        cy.wrap($el[0]).should('contain.text', 'electronic keyboard');
      });

    cy.get('@wordMeaningVerb').children().should('have.length', 1);
    cy.get('@wordMeaningVerb')
      .children()
      .then(($el) => {
        cy.wrap($el[0])
          .get('[data-cy="meaning"]')
          .should('contain.text', 'To type on a computer keyboard');

        cy.wrap($el[0])
          .get('[data-cy="example"]')
          .should(
            'contain.text',
            '"Keyboarding is the part of this job I hate the most."'
          );
      });

    cy.get('@wordSource').should(
      'contain.text',
      'https://en.wiktionary.org/wiki/keyboard'
    );
    cy.get('@wordSource')
      .should('have.attr', 'href')
      .should('contain', 'https://en.wiktionary.org/wiki/keyboard');
  });
});
