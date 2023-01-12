Cypress.Commands.add('login', (email, password) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:5005/api/login',
        body: {

        },

    });
});
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
      drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>

      // @ts-ignore
      visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

export {};
