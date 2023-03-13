/* eslint-disable @typescript-eslint/no-namespace */
import { mount } from 'cypress/react18';

Cypress.Commands.add('mount', (component, options) => {
  return mount(component, options);
});

declare global {
  namespace Cypress {
    interface Chainable {
      searchWord(word: string): Chainable<void>;
      mount: typeof mount;
    }
  }
}
