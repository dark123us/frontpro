import { login } from './commands/login';
import { getByTestId } from './commands/getByTestId';
import { resetProfile, updateProfile } from './commands/profile';
import { createArticle, removeArticle } from './commands/article';

Cypress.Commands.add('login', login);
Cypress.Commands.add('getByTestId', getByTestId);
Cypress.Commands.add('resetProfile', resetProfile);
Cypress.Commands.add('updateProfile', updateProfile);
Cypress.Commands.add('createArticle', createArticle);
Cypress.Commands.add('removeArticle', removeArticle);

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
