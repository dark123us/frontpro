import { login } from './commands/login';
import { getByTestId } from './commands/getByTestId';
import { resetProfile, updateProfile } from './commands/profile';
import { createArticle, removeArticle } from './commands/article';
import { addComment } from './commands/comment';
import { setRate } from './commands/ratings';

Cypress.Commands.add('login', login);
Cypress.Commands.add('getByTestId', getByTestId);
Cypress.Commands.add('resetProfile', resetProfile);
Cypress.Commands.add('updateProfile', updateProfile);
Cypress.Commands.add('createArticle', createArticle);
Cypress.Commands.add('removeArticle', removeArticle);
Cypress.Commands.add('addComment', addComment);
Cypress.Commands.add('setRate', setRate);

declare global {
  namespace Cypress {
    interface Chainable {
      drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // @ts-ignore
      visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

export {};
