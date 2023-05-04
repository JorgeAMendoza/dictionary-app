/* eslint-disable @typescript-eslint/no-namespace */
import './commands';
declare global {
    namespace Cypress {
      interface Chainable {
        searchWord(word: string): Chainable<void>;
      }
    }
  }