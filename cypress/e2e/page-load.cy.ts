/// <reference types="cypress" />
import hexToRgb from '../utils/hex-to-rgb';

describe('initial page load of application', () => {
  beforeEach(() => {
    cy.intercept('https://api.dictionaryapi.dev/api/v2/entries/en/keyboard', {
      statusCode: 200,
      fixture: 'keyboard.json',
    });
    cy.visit('/');
    cy.get('[data-cy="searchBar"]').as('searchBar');
    cy.get('[data-cy="wordTitle"]').as('wordTitle');
    cy.get('[data-cy="wordPronuc"]').as('wordPronuc');
    cy.get('[data-cy="audioButton"]').as('audioButton');
    cy.get('[data-cy="nounMeanings"]').as('nounMeanings');
    cy.get('[data-cy="verbMeanings"]').as('verbMeanings');
    cy.get('[data-cy="wordSources"]').as('wordSource');
  });

  it('initial search term for "keyboard" is rendered', () => {
    cy.get('@searchBar').should('have.value', 'keyboard');
    cy.get('@wordTitle').should('contain.text', 'keyboard');
    cy.get('@wordPronuc').should('contain.text', '/ˈkiːbɔːd/');
    cy.get('@audioButton')
      .find('audio')
      .should('have.attr', 'src')
      .should('contain', 'keyboard-us.mp3');

    cy.get('@nounMeanings')
      .find('[data-cy="meanings"]')
      .children()
      .should('have.length', 3);
    cy.get('@nounMeanings')
      .find('[data-cy="synonymList"]')
      .children()
      .should('have.length', 1);
    cy.get('@nounMeanings').find('[data-cy="antonymList"]').should('not.exist');

    cy.get('@verbMeanings')
      .find('[data-cy="meanings"]')
      .children()
      .should('have.length', `1`);
    cy.get('@verbMeanings').find('[data-cy="synonymList"]').should('not.exist');
    cy.get('@verbMeanings').find('[data-cy="antonymList"]').should('not.exist');

    cy.get('@wordSource').should(
      'contain.text',
      'https://en.wiktionary.org/wiki/keyboard'
    );
    cy.get('@wordSource').children().should('have.length', 1);

    cy.get('@wordSource')
      .children()
      .find('a')
      .should('have.attr', 'href')
      .should('contain', 'https://en.wiktionary.org/wiki/keyboard');
  });

  it('user prefered color scheme sets the proper theme', () => {
    const { matches: prefersDark } = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    if (prefersDark) {
      cy.get('body').should('have.css', 'background-color', hexToRgb('050505'));
    } else {
      cy.get('body').should('have.css', 'background-color', hexToRgb('FFFFFF'));
    }
  });
});
