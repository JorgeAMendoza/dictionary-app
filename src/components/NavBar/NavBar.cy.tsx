/// <reference types="cypress" />
import FontProvider from '../../context/font-context';
import NavBar from './NavBar';

describe('<NavBar/> component font switch', () => {
  beforeEach(() => {
    cy.mount(
      <FontProvider>
        <NavBar />
      </FontProvider>
    );
    cy.get('[data-cy="fontSelect"]').as('fontSelect');
  });

  it('default fault is "sans-serif"', () => {
    cy.get('@fontSelect').should('have.value', 'sans-serif');
  });

  it('change font to "serif"', () => {
    cy.get('@fontSelect').select('serif');
    cy.get('@fontSelect').should('have.value', 'serif');
  });

  it('change font to "mono"', () => {
    cy.get('@fontSelect').select('mono');
    cy.get('@fontSelect').should('have.value', 'mono');
  });
});
